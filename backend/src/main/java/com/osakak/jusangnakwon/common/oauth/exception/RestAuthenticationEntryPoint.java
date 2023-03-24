package com.osakak.jusangnakwon.common.oauth.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.osakak.jusangnakwon.common.response.ErrorCode;
import com.osakak.jusangnakwon.common.response.ErrorDto;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@Slf4j
public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {
        log.error("잘못된 토큰입니다.");

        ResponseDto responseDto = ResponseDto.builder()
                .success(false)
                .error(new ErrorDto(ErrorCode.UNAUTORIZED)).build();

        try (OutputStream os = response.getOutputStream()) {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.writeValue(os, responseDto);
            os.flush();
        }
    }
}