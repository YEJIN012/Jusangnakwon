package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import lombok.Builder;
import lombok.Getter;

@Getter
public class RatingDto {

    private final Long id;
    private final Long userId;
    private final Long liquorId;
    private final LiquorType liquorType;
    private final String liquorName;
    private final Double score;

    @Builder
    public RatingDto(Long id, Long userId, Long liquorId, LiquorType liquorType, String liquorName,
            Double score) {
        this.id = id;
        this.userId = userId;
        this.liquorId = liquorId;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.score = score;
    }
}
