package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Getter;

@Getter
public enum FeedType {
    REVIEW("리뷰글"), RECIPE("레시피"), QUESTION("질문글");

    private final String type;

    FeedType(String type) {
        this.type = type;
    }
}
