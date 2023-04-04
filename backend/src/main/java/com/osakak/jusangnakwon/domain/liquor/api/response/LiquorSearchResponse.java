package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class LiquorSearchResponse {
    private final List<LiquorListItemDto> list;

    @Builder
    public LiquorSearchResponse(List<LiquorListItemDto> list) {
        this.list = list;
    }
}
