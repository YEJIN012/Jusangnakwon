package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Schema(description = "내가 쓴 글 목록 조회")
public class RecordListResponse {

    @Schema(description = "전체 페이지 수")
    private final int totalPage;

    @Schema(description = "현재 페이지")
    private final int curPageNumber;

    @Schema(description = "피드 목록")
    private final List<RecordListDto> content;

    @Builder
    public RecordListResponse(int totalPage, int curPageNumber, List<RecordListDto> content) {
        this.totalPage = totalPage;
        this.curPageNumber = curPageNumber;
        this.content = content;
    }
}
