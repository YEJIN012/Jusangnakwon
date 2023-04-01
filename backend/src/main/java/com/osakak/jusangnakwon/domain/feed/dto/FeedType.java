package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.liquor.dto.HometenderTasteType;
import java.util.Arrays;
import lombok.Getter;

@Getter
public enum FeedType {

    리뷰글("리뷰글"), 레시피("레시피"), 질문글("질문글");

    private final String type;

    FeedType(String type) {
        this.type = type;
    }

    public static FeedType findFeedType(String str){
        return Arrays.stream(FeedType.values()).filter(t -> t.getType().equals(str))
                .findFirst().orElse(null);
    }

}
