package com.osakak.jusangnakwon.domain.feed.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentDto {

    private final Long id;
    private final UserDto writer;
    private final String content;
    private final LocalDateTime dateCreated;

    @Builder
    public CommentDto(Long id, UserDto writer, String content, LocalDateTime dateCreated) {
        this.id = id;
        this.writer = writer;
        this.content = content;
        this.dateCreated = dateCreated;
    }
}
