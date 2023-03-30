package com.osakak.jusangnakwon.domain.feed.api.request;

import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UpdateLikeRequest {

    @NotNull
    private Boolean isLiked;
}
