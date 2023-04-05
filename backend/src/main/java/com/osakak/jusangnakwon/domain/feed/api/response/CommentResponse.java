package com.osakak.jusangnakwon.domain.feed.api.response;

import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentResponse {

    private final Long id;
    private final WriterDto writer;
    private final Long feedId;
    private final String content;
    private final LocalDateTime dateCreated;

    @Builder
    public CommentResponse(Long id, WriterDto writer, Long feedId, String content,
                           LocalDateTime dateCreated) {
        this.id = id;
        this.writer = writer;
        this.feedId = feedId;
        this.content = content;
        this.dateCreated = dateCreated;
    }
}
