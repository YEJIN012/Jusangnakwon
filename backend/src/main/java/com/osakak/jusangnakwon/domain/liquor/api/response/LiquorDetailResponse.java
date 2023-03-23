package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
public class LiquorDetailResponse {
    private String id;
    private String name;
    private List<LiquorListItemDto> similarItem;

    @Builder
    public LiquorDetailResponse(String id, String name, List<LiquorListItemDto> similarItem) {
        this.id = id;
        this.name = name;
        this.similarItem = similarItem;
    }
}
