package com.osakak.jusangnakwon.domain.feed.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

@Getter
public class WriterDto {

    private final String username;
    private final String profileImg;

    @Builder
    @QueryProjection
    public WriterDto(String username, String profileImg) {
        this.username = username;
        this.profileImg = profileImg;
    }
}
