package com.osakak.jusangnakwon.domain.feed.api.request;

import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class CreateFeedRequest {

    @NotBlank
    private FeedType type;
    private String img;
    private String title;
    private Long liquorId;
    private LiquorType liquorType;
    private String liquorName;
    private String content;
    private Double ratingScore;
    @NotNull
    private Boolean isPublic;
    @NotNull
    private LocalDateTime dateCreated;
}
