package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import lombok.Builder;
import lombok.Getter;

@Getter
public class FeedListResponse {

    private final Long id;
    private final String type;
    private final String img;
    private final String title;
    private final String content;
    private final Boolean isPublic;
    private final WriterDto writer;
    private final Boolean liked;

    @Builder
    public FeedListResponse(Long id, String type, String img, String title, String content,
            Boolean isPublic, WriterDto writer, Boolean liked) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.content = content;
        this.isPublic = isPublic;
        this.writer = writer;
        this.liked = liked;
    }
}
