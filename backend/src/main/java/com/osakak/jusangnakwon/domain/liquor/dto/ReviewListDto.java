package com.osakak.jusangnakwon.domain.liquor.dto;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

@Getter
public class ReviewListDto {

    private final Double ratingScore;
    private final LocalDateTime dateCreated;
    private final String content;
    private final String img;

    @Builder
    public ReviewListDto(Double ratingScore, LocalDateTime dateCreated, String content,
            String img) {
        this.ratingScore = ratingScore;
        this.dateCreated = dateCreated;
        this.content = content;
        this.img = img;
    }
}
