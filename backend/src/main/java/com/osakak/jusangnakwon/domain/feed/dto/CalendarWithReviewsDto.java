package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import java.time.LocalDate;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
public class CalendarWithReviewsDto {

    private final LocalDate date;
    private final LiquorType liquorType;
    private final List<ReviewListItemDto> reviews;

    @Builder
    public CalendarWithReviewsDto(LocalDate date, LiquorType liquorType,
            List<ReviewListItemDto> reviews) {
        this.date = date;
        this.liquorType = liquorType;
        this.reviews = reviews;
    }
}
