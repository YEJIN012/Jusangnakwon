package com.osakak.jusangnakwon.common.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDto {

    private boolean success;
    private ErrorDto error;
    private Object body;

    @Builder
    public ResponseDto(boolean success, ErrorDto error, Object body) {
        this.success = success;
        this.error = error;
        this.body = body;
    }
}