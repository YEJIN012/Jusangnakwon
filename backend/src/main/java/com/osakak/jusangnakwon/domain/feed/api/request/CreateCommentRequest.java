package com.osakak.jusangnakwon.domain.feed.api.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class CreateCommentRequest {

    @NotNull
    private Long feedId;
    private String content;
}
