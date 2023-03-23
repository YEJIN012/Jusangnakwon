package com.osakak.jusangnakwon.domain.liquor.mapper.impl;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.WineRepository;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import lombok.RequiredArgsConstructor;

import java.util.List;

public class LiquorMapperImpl implements LiquorMapper {
    /**
     * 메인 페이지에 보여줄 페이징된 술 리스트
     *
     * @param content       술 id, name 데이터
     * @param totalPage     전체 페이지
     * @param curPageNumber 현재 페이지
     * @return 페이징 처리된 응답
     */
    @Override
    public LiquorListMainResponse toMainPageResponse(List<LiquorListItemDto> content, int totalPage, int curPageNumber) {
        return LiquorListMainResponse.builder()
                .totalPage(totalPage)
                .curPageNumber(curPageNumber)
                .content(content).build();
    }

}