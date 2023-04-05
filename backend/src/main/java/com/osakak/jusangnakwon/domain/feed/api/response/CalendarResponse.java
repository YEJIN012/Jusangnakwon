package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.ReviewListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

@Getter
public class CalendarResponse {

    private final LocalDate date;
    private final LiquorType liquorType;
    private final List<ReviewListItemDto> reviews;

    @Builder
    public CalendarResponse(LocalDate date, LiquorType liquorType, List<ReviewListItemDto> reviews) {
        this.date = date;
        this.liquorType = liquorType;
        this.reviews = reviews;
    }
}
