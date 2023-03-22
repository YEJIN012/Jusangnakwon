package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class FeedDto {

    private final String id;
    private final String type;
    private final String img;
    private final String title;
    private final String liquorType;
    private final String liquorName;
    private final String content;
    private final Double rating;
    private final Boolean isPublic;
    private final String writerProfileImg;
    private final String writerName;
    private final Integer likeCnt;
    private final Boolean liked;
    private final List<CommentDto> comments;

    @Builder
    public FeedDto(String id, String type, String img, String title, String liquorType, String liquorName, String content, Double rating, Boolean isPublic, String writerProfileImg, String writerName, Integer likeCnt, Boolean liked, List<CommentDto> comments) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.content = content;
        this.rating = rating;
        this.isPublic = isPublic;
        this.writerProfileImg = writerProfileImg;
        this.writerName = writerName;
        this.likeCnt = likeCnt;
        this.liked = liked;
        this.comments = comments;
    }
}
