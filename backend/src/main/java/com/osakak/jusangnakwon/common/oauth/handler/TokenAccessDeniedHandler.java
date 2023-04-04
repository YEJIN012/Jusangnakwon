package com.osakak.jusangnakwon.common.oauth.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.osakak.jusangnakwon.common.response.ErrorCode;
import com.osakak.jusangnakwon.common.response.ErrorDto;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@Component
@RequiredArgsConstructor
public class TokenAccessDeniedHandler implements AccessDeniedHandler {

    private final HandlerExceptionResolver handlerExceptionResolver;

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN, accessDeniedException.getMessage());
        handlerExceptionResolver.resolveException(request, response, null, accessDeniedException);
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
