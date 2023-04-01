package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class TagDto {

    private final String name;

    @Builder
    public TagDto(String name) {
        this.name = name;
    }
}
