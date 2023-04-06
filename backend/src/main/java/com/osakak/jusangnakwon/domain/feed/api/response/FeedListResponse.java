package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Schema(description = "피드 목록 조회")
public class FeedListResponse {

    @Schema(description = "전체 페이지 수")
    private final int totalPage;

    @Schema(description = "현재 페이지")
    private final int curPageNumber;

    @Schema(description = "피드 목록")
    private final List<FeedListDto> content;


    @Builder
    public FeedListResponse(int totalPage, int curPageNumber, List<FeedListDto> content) {
        this.totalPage = totalPage;
        this.curPageNumber = curPageNumber;
        this.content = content;
    }
}
