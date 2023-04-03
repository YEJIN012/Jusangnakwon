package com.osakak.jusangnakwon.common.errors;

public class SurveyNotFoundException extends NullPointerException{
    public SurveyNotFoundException(Long id) {
        super("회원 "+id+"님은 아직 취향 설문을 하지 않았습니다");
    }
}
