package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class LiquorDetailResponse {
    private final Long id;
    private final String name;
    private final Double ratingAvg;
    private final Long scrapCnt;
    private final Boolean scrapped;
    private final String description;
    private final List<Feed> feeds;
    private final List<String> tastes;
    private final List<LiquorListItemDto> similarItem;
    private final String image;

    @Builder
    public LiquorDetailResponse(Long id, String name, Double ratingAvg, Long scrapCnt,
            Boolean scrapped,
            String description, List<Feed> feeds, List<String> tastes,
            List<LiquorListItemDto> similarItem, String image) {
        this.id = id;
        this.name = name;
        this.ratingAvg = ratingAvg;
        this.scrapCnt = scrapCnt;
        this.scrapped = scrapped;
        this.description = description;
        this.feeds = feeds;
        this.tastes = tastes;
        this.similarItem = similarItem;
        this.image = image;
    }
}
