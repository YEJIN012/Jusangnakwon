package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Schema(description = "내 스크랩 목록 조회")
public class ScrapListResponse {

    @Schema(description = "전체 페이지 수")
    private final int totalPage;

    @Schema(description = "현재 페이지")
    private final int curPageNumber;

    @Schema(description = "스크랩 목록")
    private final List<LiquorListItemDto> content;

    @Builder
    public ScrapListResponse(int totalPage, int curPageNumber, List<LiquorListItemDto> content) {
        this.totalPage = totalPage;
        this.curPageNumber = curPageNumber;
        this.content = content;
    }
}
