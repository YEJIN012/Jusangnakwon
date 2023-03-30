package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class RatingDto {

    private final Long id;
    private final Long userId;
    private final Long liquorId;
    private final String liquorType;
    private final String liquorName;
    private final Double score;

    @Builder
    public RatingDto(Long id, Long userId, Long liquorId, String liquorType, String liquorName,
            Double score) {
        this.id = id;
        this.userId = userId;
        this.liquorId = liquorId;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.score = score;
    }
}
