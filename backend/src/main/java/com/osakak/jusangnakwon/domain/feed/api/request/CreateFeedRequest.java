package com.osakak.jusangnakwon.domain.feed.api.request;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class CreateFeedRequest {

    @NotBlank
    private String type;
    private String img;
    private String title;
    private String liquorType;
    private String liquorName;
    private String content;
    private Double ratingScore;
    @NotNull
    private Boolean isPublic;
    @NotNull
    private LocalDateTime dateCreated;
}
