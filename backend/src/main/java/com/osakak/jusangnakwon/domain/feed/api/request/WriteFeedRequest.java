package com.osakak.jusangnakwon.domain.feed.api.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class WriteFeedRequest {

    @NotBlank
    private String type;
    private String img;
    private String title;
    private String liquorType;
    private String liquorName;
    private String content;
    private Double ratingScore;
    @NotBlank
    private Boolean isPublic;

}
