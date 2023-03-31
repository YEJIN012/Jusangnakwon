package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

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
