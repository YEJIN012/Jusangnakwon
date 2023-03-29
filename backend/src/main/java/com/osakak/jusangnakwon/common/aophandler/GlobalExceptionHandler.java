package com.osakak.jusangnakwon.common.aophandler;

import com.osakak.jusangnakwon.common.response.ErrorCode;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<?> NullPointerException(NullPointerException nullPointerException) {
        return ResponseEntity.ok("");
    }


}
