package com.osakak.jusangnakwon.domain.feed.api.request;

import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class CreateFeedRequest {

    @NotNull
    private FeedType type;
    private MultipartFile img;
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
