package com.osakak.jusangnakwon.domain.user.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.user.application.UserService;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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

    @GetMapping("/info")
    public ResponseEntity<ResponseDto> getUser(Authentication authentication) {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        authentication.getPrincipal();
        Optional<User> user = userService.getUser(principal.getUsername());
        ResponseDto responseDto=new ResponseDto();
        responseDto.setBody(user.get());

        return ResponseEntity.ok(responseDto);
    }
}

