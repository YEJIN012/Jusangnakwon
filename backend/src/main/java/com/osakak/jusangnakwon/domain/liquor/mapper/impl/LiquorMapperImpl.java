package com.osakak.jusangnakwon.domain.liquor.mapper.impl;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;

import java.util.List;


public class LiquorMapperImpl implements LiquorMapper {
    @Override
    public LiquorListMainResponse toMainPageResponse(List<LiquorListItemDto> content, int totalPage, int curPageNumber) {
        LiquorListMainResponse response = new LiquorListMainResponse();
        response.setTotalPage(totalPage);
        response.setCurPageNumber(curPageNumber);
        response.setContent(content);
        return response;
    }
}
