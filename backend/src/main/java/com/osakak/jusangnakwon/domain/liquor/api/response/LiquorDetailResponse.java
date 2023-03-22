package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LiquorDetailResponse {
    private String id;
    private String name;
    private List<LiquorListItemDto> similarItem;

}
