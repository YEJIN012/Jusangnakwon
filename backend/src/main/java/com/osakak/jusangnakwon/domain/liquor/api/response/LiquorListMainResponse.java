package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LiquorListMainResponse {
    private int totalPage;
    private int curPageNumber;
    private List<LiquorListItemDto> content;
}
