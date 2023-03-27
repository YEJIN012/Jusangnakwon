package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LiquorListItemDto {
    private String id;
    private String name;

    @Builder
    public LiquorListItemDto(String id, String name) {
        this.id = id;
        this.name = name;
    }
}
