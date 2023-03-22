package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentDto {

    private final String profileImg;
    private final String name;
    private final String content;
    private final LocalDateTime createdAt;

    @Builder
    public CommentDto(String profileImg, String name, String content, LocalDateTime createdAt) {
        this.profileImg = profileImg;
        this.name = name;
        this.content = content;
        this.createdAt = createdAt;
    }
}
