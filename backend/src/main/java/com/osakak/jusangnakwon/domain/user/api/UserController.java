package com.osakak.jusangnakwon.domain.user.api;

import com.osakak.jusangnakwon.common.oauth.entity.UserPrincipal;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.user.api.response.GetUserResponse;
import com.osakak.jusangnakwon.domain.user.application.UserService;
import com.osakak.jusangnakwon.domain.user.entity.User;
import com.osakak.jusangnakwon.domain.user.mapper.UserDtoMapper;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserDtoMapper userDtoMapper = Mappers.getMapper(UserDtoMapper.class);

    @GetMapping("/info")
    public ResponseEntity<ResponseDto> getUserInfo(@AuthenticationPrincipal User user) {
        GetUserResponse getUserResponse = userDtoMapper.toUserResponse(userService.getUserInfo(user.getUserId()));
        ResponseDto responseDto = ResponseDto.builder().success(true).body(getUserResponse).build();
        return ResponseEntity.ok(responseDto);
    }
}

