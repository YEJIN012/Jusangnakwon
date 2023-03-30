package com.osakak.jusangnakwon.domain.feed.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import lombok.Setter;

@Getter
@Setter
public class FeedDto {

    private final Long id;
    private final String type;
    private final String img;
    private final String title;
    private final String liquorType;
    private final String liquorName;
    private final String content;
    private Double ratingScore;
    private final Boolean isPublic;
    private final LocalDateTime dateCreated;
    private final WriterDto writer;
    private Long likeCnt;
    private Boolean liked;
    private List<CommentDto> comments;

    @QueryProjection
    public FeedDto(Long id, String type, String img, String title, String liquorType,
            String liquorName,
            String content, Double ratingScore, Boolean isPublic, LocalDateTime dateCreated,
            WriterDto writer, Long likeCnt, Boolean liked) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.content = content;
        this.ratingScore = ratingScore;
        this.isPublic = isPublic;
        this.dateCreated = dateCreated;
        this.writer = writer;
        this.likeCnt = likeCnt;
        this.liked = liked;
    }

    @Builder
    public FeedDto(Long id, String type, String img, String title, String liquorType,
            String liquorName,
            String content, Double ratingScore, Boolean isPublic, LocalDateTime dateCreated,
            WriterDto writer, Long likeCnt, Boolean liked, List<CommentDto> comments) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.content = content;
        this.ratingScore = ratingScore;
        this.isPublic = isPublic;
        this.dateCreated = dateCreated;
        this.writer = writer;
        this.likeCnt = likeCnt;
        this.liked = liked;
        this.comments = comments;
    }
}
