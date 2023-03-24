package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class LiquorListMainResponse {
    private int totalPage;
    private int curPageNumber;
    private List<LiquorListItemDto> content;

    @Builder
    public LiquorListMainResponse(int totalPage, int curPageNumber, List<LiquorListItemDto> content) {
        this.totalPage = totalPage;
        this.curPageNumber = curPageNumber;
        this.content = content;
    }
}
