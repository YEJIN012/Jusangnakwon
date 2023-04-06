package com.osakak.jusangnakwon.domain.liquor.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@ToString
public class LiquorListItemDto {
    private final Long id;
    private final String name;
    private final String img;
    @Enumerated(EnumType.STRING)
    private final LiquorType liquorType;
    private final Boolean scrapped;

    @Builder
    @QueryProjection
    public LiquorListItemDto(Long id, String name, String img, LiquorType liquorType, Boolean scrapped) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.liquorType = liquorType;
        this.scrapped = scrapped != null && scrapped;
    }

    public LiquorListItemDto(Long id, String name, String img, LiquorType liquorType) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.liquorType = liquorType;
        this.scrapped = false;
    }
}
