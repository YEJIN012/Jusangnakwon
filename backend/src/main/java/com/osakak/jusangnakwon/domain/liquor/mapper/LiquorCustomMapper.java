package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LiquorCustomMapper {
    /**
     * 메인 페이지에 보여줄 페이징된 술 리스트
     *
     * @param content       술 id, name 데이터
     * @param totalPage     전체 페이지
     * @param curPageNumber 현재 페이지
     * @return 페이징 처리된 응답
     */
    LiquorListMainResponse toMainPageResponse(List<LiquorListItemDto> content, int totalPage, int curPageNumber);
}
