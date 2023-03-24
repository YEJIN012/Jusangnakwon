package com.osakak.jusangnakwon.common.response;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum ErrorCode {
    //@formatter:off
    INVALID_PARAMS(400, "InvalidParams", "필수데이터 누락, 또는 형식과 다른 데이터를 요청하셨습니다."), UNAUTORIZED(401,
            "Unauthorized", "토큰 정보가 유효하지 않습니다."), EXPIRED_REFRESH_TOKEN(402, "ExpiredRefreshToken",
            "리프레시 토큰이 만료되었습니다. 다시 로그인 해주세요"), NOT_EXPIRED_TOKEN(401, "NotExpiredToken",
            "아직 유효한 토큰입니다."), UNAVAILABLE(401, "Unavailable", "회원가입이 완료되지 않은 사용자입니다."), NOT_FOUND(
            404, "NotFound", "존재하지 않는 데이터입니다."), CONFLICT(409, "Conflict", "데이터가 충돌되었습니다.");

    //@formatter:on
    ErrorCode(int status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }

    private int status;
    private String code;
    private String message;

    public static ErrorCode valueOfCode(String errorCode) {
        return Arrays.stream(values())
                .filter(value -> value.code.equals(errorCode))
                .findAny()
                .orElse(null);
    }
}