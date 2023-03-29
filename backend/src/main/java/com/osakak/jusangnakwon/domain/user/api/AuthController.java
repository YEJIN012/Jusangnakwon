package com.osakak.jusangnakwon.domain.user.api;

import com.osakak.jusangnakwon.common.jwt.AuthToken;
import com.osakak.jusangnakwon.common.jwt.AuthTokenProvider;
import com.osakak.jusangnakwon.common.oauth.entity.RoleType;
import com.osakak.jusangnakwon.common.properties.AppProperties;
import com.osakak.jusangnakwon.common.response.ErrorCode;
import com.osakak.jusangnakwon.common.response.ErrorDto;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.common.utils.CookieUtil;
import com.osakak.jusangnakwon.common.utils.HeaderUtil;
import io.jsonwebtoken.Claims;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import static com.osakak.jusangnakwon.common.response.ErrorCode.INVALID_PARAMS;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AppProperties appProperties;
    private final AuthTokenProvider tokenProvider;
    private final RedisTemplate<String, String> redisTemplate;
    private final AuthenticationManager authenticationManager;

    private final static long THREE_DAYS_MSEC = 259200000;
    private final static String REFRESH_TOKEN = "refresh_token";

    /**
     * access token 재발급
     *
     * @param request
     * @param response
     * @return access token
     */
    @Tag(name = "getAccessToken")
    @Operation(
            summary = "AccessToken 재발급",
            description = "AccessToken이 만료되었을 때, RefreshToken을 이용해서 AccessToken을 재발급"
    )
    @GetMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        // access token 확인
        String accessToken = HeaderUtil.getAccessToken(request);
        AuthToken authToken = tokenProvider.convertAuthToken(accessToken);

        // refresh token
        String refreshToken = CookieUtil.getCookie(request, REFRESH_TOKEN)
                .map(Cookie::getValue)
                .orElse((null));
        AuthToken authRefreshToken = tokenProvider.convertAuthToken(refreshToken);

        // expired access token 인지 확인
        Claims claims = authToken.getExpiredTokenClaims();
        if (claims == null) {
            ResponseDto responseDto = ResponseDto.builder().success(false).error(new ErrorDto(ErrorCode.NOT_EXPIRED_TOKEN)).build();
            return ResponseEntity.ok(responseDto);
        }

        String userId = claims.getSubject();
        Long id = claims.get("id", Long.class);
        RoleType roleType = RoleType.of(claims.get("role", String.class));

        if (!authRefreshToken.validate()) {
            ResponseDto responseDto = ResponseDto.builder().success(false).error(new ErrorDto(ErrorCode.EXPIRED_REFRESH_TOKEN)).build();
            return ResponseEntity.ok(responseDto);
        }


        // Redis에서 저장된 Refresh Token 값을 가져온다.
        String refreshTokenValue = redisTemplate.opsForValue().get(userId);
        if (refreshTokenValue == null) {
            ResponseDto responseDto = ResponseDto.builder().success(false).error(new ErrorDto(ErrorCode.UNAUTORIZED)).build();
            return ResponseEntity.ok(responseDto);
        }

        Date now = new Date();
        AuthToken newAccessToken = tokenProvider.createAuthToken(
                id,
                userId,
                roleType.getCode(),
                new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
        );

        long validTime = authRefreshToken.getTokenClaims().getExpiration().getTime() - now.getTime();

        // refresh 토큰 기간이 3일 이하로 남은 경우, refresh 토큰 갱신
        if (validTime <= THREE_DAYS_MSEC) {
            // refresh 토큰 설정
            long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();

            authRefreshToken = tokenProvider.createAuthToken(
                    appProperties.getAuth().getTokenSecret(),
                    new Date(now.getTime() + refreshTokenExpiry)
            );

            // DB에 refresh 토큰 업데이트
            // RefreshToken Redis에 업데이트
            redisTemplate.opsForValue().set(
                    userId,
                    authRefreshToken.getToken(),
                    refreshTokenExpiry,
                    TimeUnit.MILLISECONDS
            );

            int cookieMaxAge = (int) refreshTokenExpiry / 60;
            CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
            CookieUtil.addCookie(response, REFRESH_TOKEN, authRefreshToken.getToken(), cookieMaxAge);
        }

        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(newAccessToken.getToken())
                .build();
        return ResponseEntity.ok(responseDto);
    }
}

