package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ReviewListDto {
    private final Long id;
    private final Double ratingScore;
    private final LocalDateTime dateCreated;
    private final String content;
    private final String img;

    @Builder
    public ReviewListDto(Long id, Double ratingScore, LocalDateTime dateCreated, String content, String img) {
        this.id = id;
        this.ratingScore = ratingScore;
        this.dateCreated = dateCreated;
        this.content = content;
        this.img = img;
    }
}
