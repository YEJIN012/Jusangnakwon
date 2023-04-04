package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

public interface RecordListDto {

    Long getId();
    FeedType getFeedType();
    LocalDateTime getDateCreated();
    String getTitle();
    String getContent();
    String getImage();

}