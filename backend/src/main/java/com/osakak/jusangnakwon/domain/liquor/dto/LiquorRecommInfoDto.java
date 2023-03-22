package com.osakak.jusangnakwon.domain.liquor.dto;

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

}
