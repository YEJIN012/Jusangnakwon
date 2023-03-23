package com.osakak.jusangnakwon.domain.liquor.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingUser {
    private String user_id;
    private int rating;

    @Builder
    public RatingUser(String user_id, int rating) {
        this.user_id = user_id;
        this.rating = rating;
    }
}
