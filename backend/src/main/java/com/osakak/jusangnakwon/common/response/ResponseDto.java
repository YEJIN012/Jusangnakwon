package com.osakak.jusangnakwon.common.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDto {
    private boolean success;
    private ErrorCode error;
    private Object body;

}
