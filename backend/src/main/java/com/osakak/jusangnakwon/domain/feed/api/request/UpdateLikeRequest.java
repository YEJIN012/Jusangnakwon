package com.osakak.jusangnakwon.domain.feed.api.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class UpdateLikeRequest {

    @NotNull
    private Boolean isLiked;
}
