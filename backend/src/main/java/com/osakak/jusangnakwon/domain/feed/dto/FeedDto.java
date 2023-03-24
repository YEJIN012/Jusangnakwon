package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class FeedDto {

    private final Long id;
    private final String type;
    private final String img;
    private final String title;
    private final String liquorType;
    private final String liquorName;
    private final String content;
    private final Boolean isPublic;
    private final UserDto writer;
    private final Integer likeCnt;
    private final Boolean liked;
    private final List<CommentDto> comments;

    @Builder
    public FeedDto(Long id, String type, String img, String title, String liquorType,
            String liquorName,
            String content, Boolean isPublic, UserDto writer, Integer likeCnt, Boolean liked,
            List<CommentDto> comments) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.content = content;
        this.isPublic = isPublic;
        this.writer = writer;
        this.likeCnt = likeCnt;
        this.liked = liked;
        this.comments = comments;
    }
}
