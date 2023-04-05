package com.osakak.jusangnakwon.domain.liquor.dto;

import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class HometenderDto {

    private final Long id;
    private final String name;
    private final WriterDto writer;
    private String image;
    private Double ratingAvg;
    private Long scrapCnt;
    private Boolean scrapped;
    private final String materials;
    private final HometenderTasteDto taste;
    private LiquorType liquorType;
    private final String description;
    private List<ReviewListDto> reviews;
    private List<LiquorListItemDto> similarItems;

    @Builder
    public HometenderDto(Long id, String name, WriterDto writer, String image, Double ratingAvg,
                         Long scrapCnt, Boolean scrapped, String materials, HometenderTasteDto taste,
                         LiquorType liquorType, String description, List<ReviewListDto> reviews,
                         List<LiquorListItemDto> similarItems) {
        this.id = id;
        this.name = name;
        this.writer = writer;
        this.image = image;
        this.ratingAvg = ratingAvg;
        this.scrapCnt = scrapCnt;
        this.scrapped = scrapped;
        this.materials = materials;
        this.taste = taste;
        this.liquorType = liquorType;
        this.description = description;
        this.reviews = reviews;
        this.similarItems = similarItems;
    }
}
