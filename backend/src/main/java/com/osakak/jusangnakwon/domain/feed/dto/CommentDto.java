package com.osakak.jusangnakwon.domain.feed.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentDto {

    private final Long id;
    private final WriterDto writer;
    private final Long feedId;
    private final String content;
    private final LocalDateTime dateCreated;

    @Builder
    @QueryProjection
    public CommentDto(Long id, WriterDto writer, Long feedId, String content,
                      LocalDateTime dateCreated) {
        this.id = id;
        this.writer = writer;
        this.feedId = feedId;
        this.content = content;
        this.dateCreated = dateCreated;
    }
}
