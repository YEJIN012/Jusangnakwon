package com.osakak.jusangnakwon.common.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorDto {
    int status;
    String code;
    String message;

    public ErrorDto(ErrorCode errorCode) {
        this.status = errorCode.getStatus();
        this.code = errorCode.getCode();
        this.message = errorCode.getMessage();
    }
}
