package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class FeedResponse {

    private final Long id;
    private final FeedType type;
    private final String img;
    private final String title;
    private final Long liquorId;
    private final LiquorType liquorType;
    private final String liquorName;
    private final String content;
    private final Double ratingScore;
    private final Boolean isPublic;
    private final LocalDateTime dateCreated;
    private final WriterDto writer;
    private final Integer likeCnt;
    private final Boolean liked;
    private final List<CommentDto> comments;


    @Builder
    public FeedResponse(Long id, FeedType type, String img, String title, Long liquorId,
                        LiquorType liquorType, String liquorName, String content, Double ratingScore,
                        Boolean isPublic, LocalDateTime dateCreated, WriterDto writer, Integer likeCnt,
                        Boolean liked, List<CommentDto> comments) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorId = liquorId;
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
