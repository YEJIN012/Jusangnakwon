package com.osakak.jusangnakwon.domain.user.api.request;

import lombok.Getter;

@Getter
public class SurveyRequest {
    private int sweetness;
    private int bitter;
    private int body;
    private int aroma;
    private int sour;
}
