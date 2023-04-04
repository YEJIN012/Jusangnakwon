package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class HometenderPageDto {
    private final Long id;
    private final String name;
    private final String img;
    private final List<String> ingredients;
    private final String explain;
    private final LiquorType liquorType;

    @Builder
    public HometenderPageDto(Long id, String name, String img, List<String> ingredients, String explain, LiquorType liquorType) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.ingredients = ingredients;
        this.explain = explain;
        this.liquorType = liquorType;
    }
}
