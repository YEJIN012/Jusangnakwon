package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class WriteFeedResponse {

    private String type;
    private String img;
    private String title;
    private String liquorType;
    private String liquorName;
    private String content;
    private Double rating;
    private Boolean isPublic;
    private String writerProfileImg;
    private String writerName;
    private Integer likeCnt;
    private Boolean liked;
    private List<CommentDto> comments;

    @Builder
    public WriteFeedResponse(String type, String img, String title, String liquorType, String liquorName, String content, Double rating, Boolean isPublic, String writerProfileImg, String writerName, Integer likeCnt, Boolean liked, List<CommentDto> comments) {
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
