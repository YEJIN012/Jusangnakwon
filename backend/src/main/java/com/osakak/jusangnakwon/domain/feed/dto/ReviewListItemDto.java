package com.osakak.jusangnakwon.domain.feed.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

@Getter
public class ReviewListItemDto {

    private final Long id;
    private final Double ratingScore;
    private final LocalDateTime dateCreated;
    private final String content;
    private final String img;

    @Builder
    @QueryProjection
    public ReviewListItemDto(Long id, Double ratingScore, LocalDateTime dateCreated, String content,
            String img) {
        this.id = id;
        this.ratingScore = ratingScore;
        this.dateCreated = dateCreated;
        this.content = content;
        this.img = img;
    }
}
