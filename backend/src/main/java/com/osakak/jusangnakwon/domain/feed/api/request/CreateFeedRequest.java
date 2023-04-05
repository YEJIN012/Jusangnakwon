package com.osakak.jusangnakwon.domain.feed.api.request;

import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class CreateFeedRequest {


    private FeedType type;
    private String title;
    private Long liquorId;
    private LiquorType liquorType;
    private String liquorName;
    private String content;
    private Double ratingScore;
    private Boolean isPublic;
    private LocalDateTime dateCreated;
}
