package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Getter;

import javax.persistence.Embeddable;

@Getter
@Embeddable
public class SimilarItemValueType {
    private Long item1;
    private Long item2;
    private Long item3;
    private Long item4;
    private Long item5;

}
