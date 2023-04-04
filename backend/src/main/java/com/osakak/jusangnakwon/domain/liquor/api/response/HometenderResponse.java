package com.osakak.jusangnakwon.domain.liquor.api.response;

import com.osakak.jusangnakwon.domain.liquor.dto.HometenderPageDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class HometenderResponse {
    private final List<HometenderPageDto> content;

    @Builder
    public HometenderResponse(List<HometenderPageDto> content) {
        this.content = content;
    }
}
