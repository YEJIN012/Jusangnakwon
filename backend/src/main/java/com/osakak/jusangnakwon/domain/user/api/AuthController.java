package com.osakak.jusangnakwon.domain.user.api;

import com.osakak.jusangnakwon.common.jwt.AuthToken;
import com.osakak.jusangnakwon.common.jwt.AuthTokenProvider;
import com.osakak.jusangnakwon.common.oauth.entity.RoleType;
import com.osakak.jusangnakwon.common.properties.AppProperties;
import com.osakak.jusangnakwon.common.response.ErrorCode;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.common.utils.CookieUtil;
import com.osakak.jusangnakwon.common.utils.HeaderUtil;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
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
public class AuthController {

    private final AppProperties appProperties;
    private final AuthTokenProvider tokenProvider;
    private final RedisTemplate<String, String> redisTemplate;
    private final AuthenticationManager authenticationManager;

    private final static long THREE_DAYS_MSEC = 259200000;
    private final static String REFRESH_TOKEN = "refresh_token";


    @GetMapping("/refresh")
    public ResponseEntity<ResponseDto> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        // access token 확인
        String accessToken = HeaderUtil.getAccessToken(request);
        AuthToken authToken = tokenProvider.convertAuthToken(accessToken);
        if (!authToken.validate()) {
            /**
             * 에러처리 해야함
             */
            ResponseDto responseDto = new ResponseDto();
//            responseDto.setError(INVALID_PARAMS);
            return ResponseEntity.ok(responseDto);
        }

        // expired access token 인지 확인
        Claims claims = authToken.getExpiredTokenClaims();
        if (claims == null) {
            return ResponseEntity.ok(new ResponseDto());
        }

        String userId = claims.getSubject();
        RoleType roleType = RoleType.of(claims.get("role", String.class));

        // refresh token
        String refreshToken = CookieUtil.getCookie(request, REFRESH_TOKEN)
                .map(Cookie::getValue)
                .orElse((null));
        AuthToken authRefreshToken = tokenProvider.convertAuthToken(refreshToken);

        if (authRefreshToken.validate()) {
            return ResponseEntity.ok(new ResponseDto());
        }


        // Redis에서 저장된 Refresh Token 값을 가져온다.
        String refreshTokenValue = redisTemplate.opsForValue().get(userId);
        if (!refreshTokenValue.equals(authRefreshToken.getToken())) {
            //throw new exception
        }


        if (refreshTokenValue == null) {
            return ResponseEntity.ok(new ResponseDto());
        }

        Date now = new Date();
        AuthToken newAccessToken = tokenProvider.createAuthToken(
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
        ResponseDto responseDto = new ResponseDto();
        responseDto.setBody(newAccessToken.getToken());
        return ResponseEntity.ok(responseDto);
    }
}

