package com.osakak.jusangnakwon.domain.liquor.api.response;

import lombok.Builder;
import lombok.Getter;

import java.util.*;

@Getter
public class RandomHometenderResponse {
    private final Long id;
    private final String name;
    private final String img;
    private final List<String> materials;

    @Builder
    public RandomHometenderResponse(Long id, String name, String img, List<String> materials) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.materials = materials;
    }
}
