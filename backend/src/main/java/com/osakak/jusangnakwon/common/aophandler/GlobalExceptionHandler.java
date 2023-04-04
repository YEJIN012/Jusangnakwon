package com.osakak.jusangnakwon.common.aophandler;

import com.osakak.jusangnakwon.common.errors.*;
import com.osakak.jusangnakwon.common.oauth.exception.TokenValidFailedException;
import com.osakak.jusangnakwon.common.response.ErrorCode;
import com.osakak.jusangnakwon.common.response.ErrorDto;
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

    @ExceptionHandler(NoLiquorNameExistException.class)
    public ResponseEntity<ResponseDto> noLiquorException(NoLiquorNameExistException e) {
        return ResponseEntity.ok(ResponseDto.builder()
                .success(false)
                .error(new ErrorDto(ErrorCode.NO_LIQUOR))
                .build());
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ResponseDto> userNotFoundException(UserNotFoundException e) {
        return ResponseEntity.ok(ResponseDto.builder()
                .success(false)
                .error(new ErrorDto(ErrorCode.NOT_FOUND))
                .build());
    }

    @ExceptionHandler(FeedNotFoundException.class)
    public ResponseEntity<ResponseDto> feedNotFoundException(FeedNotFoundException e) {
        return ResponseEntity.ok(ResponseDto.builder()
                .success(false)
                .error(new ErrorDto(ErrorCode.NOT_FOUND))
                .build());
    }

    @ExceptionHandler(LiquorNotFoundException.class)
    public ResponseEntity<ResponseDto> feedNotFoundException(LiquorNotFoundException e) {
        return ResponseEntity.ok(ResponseDto.builder()
                .success(false)
                .error(new ErrorDto(ErrorCode.NO_LIQUOR))
                .build());
    }

    @ExceptionHandler(SurveyNotFoundException.class)
    public ResponseEntity<ResponseDto> surveyNotFoundException(SurveyNotFoundException e) {
        return ResponseEntity.ok(ResponseDto.builder()
                .success(false)
                .error(new ErrorDto(ErrorCode.SURVEY_NOT_FOUND))
                .build());
    }
}
