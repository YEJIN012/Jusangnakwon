package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class LiquorRecommInfoDto {
    private String id;
    private String name;
    private List<String> similar_liquor;

    @Builder
    public LiquorRecommInfoDto(String id, String name, List<String> similar_liquor) {
        this.id = id;
        this.name = name;
        this.similar_liquor = similar_liquor;
    }
}
