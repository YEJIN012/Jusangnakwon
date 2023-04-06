package com.osakak.jusangnakwon.domain.liquor.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public class LiquorListItemScrapDto {
    private Long id;
    private String name;
    private String img;
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    private boolean scrapped;

    @Builder
    @QueryProjection
    public LiquorListItemScrapDto(Long id, String name, String img, LiquorType liquorType, boolean scrapped) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.liquorType = liquorType;
        this.scrapped = scrapped;
    }
}
