package com.osakak.jusangnakwon.common.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDto {
    private boolean success;
    private ErrorDto error;
    private Object body;

}