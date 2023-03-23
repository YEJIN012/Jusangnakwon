package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScrapUser {
    private String userId;
    private boolean scrapped;

    @Builder
    public ScrapUser(String userId, boolean scrapped) {
        this.userId = userId;
        this.scrapped = scrapped;
    }
}
