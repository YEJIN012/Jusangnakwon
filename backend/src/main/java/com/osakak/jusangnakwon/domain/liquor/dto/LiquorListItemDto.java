package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@Setter
@ToString
public class LiquorListItemDto {
    private Long id;
    private String name;
    private String img;
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;

    @Builder
    public LiquorListItemDto(Long id, String name, String img, LiquorType liquorType) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.liquorType = liquorType;
    }
}
