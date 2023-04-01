package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class LiquorDetailResponse {

    private final Long id;
    private final String name;
    private final WriterDto writer;
    private final String image;
    private final Double ratingAvg;
    private final Long scrapCnt;
    private final Boolean scrapped;
    private final List<String> ingredients;
    private final List<String> tastes;
    private final String description;
    private final List<ReviewListDto> reviews;
    private final List<LiquorListItemDto> similarItems;

    @Builder
    public LiquorDetailResponse(
            Long id,
            String name,
            WriterDto writer,
            String image,
            Double ratingAvg,
            Long scrapCnt,
            Boolean scrapped,
            List<String> ingredients,
            List<String> tastes,
            String description,
            List<ReviewListDto> reviews,
            List<LiquorListItemDto> similarItems
    ) {
        this.id = id;
        this.name = name;
        this.writer = writer;
        this.image = image;
        this.ratingAvg = ratingAvg;
        this.scrapCnt = scrapCnt;
        this.scrapped = scrapped;
        this.ingredients = ingredients;
        this.tastes = tastes;
        this.description = description;
        this.reviews = reviews;
        this.similarItems = similarItems;
    }
}
