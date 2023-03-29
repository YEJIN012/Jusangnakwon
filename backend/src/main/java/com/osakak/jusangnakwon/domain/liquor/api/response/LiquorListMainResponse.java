package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Schema(description = "메인 페이지 주종 조회")
public class LiquorListMainResponse {
    @Schema(description = "전체 페이지 수")
    private int totalPage;
    @Schema(description = "현재 페이지")
    private int curPageNumber;
    @Schema(description = "술 id, name 리스트")
    private List<LiquorListItemDto> content;

    @Builder
    public LiquorListMainResponse(int totalPage, int curPageNumber, List<LiquorListItemDto> content) {
        this.totalPage = totalPage;
        this.curPageNumber = curPageNumber;
        this.content = content;
    }
}
