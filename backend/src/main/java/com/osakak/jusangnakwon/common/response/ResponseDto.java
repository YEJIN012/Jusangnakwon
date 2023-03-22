package com.osakak.jusangnakwon.common.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ResponseDto {
    private boolean success;
    private ErrorCode error;
    private Object body;

}