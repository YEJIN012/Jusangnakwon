package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ReviewItemDto {
    private final LocalDateTime dateCreated;
    private final String content;
    private final String img;

    @Builder
    public ReviewItemDto(LocalDateTime dateCreated, String content, String img) {
        this.dateCreated = dateCreated;
        this.content = content;
        this.img = img;
    }
}
