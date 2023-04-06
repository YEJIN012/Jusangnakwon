package com.osakak.jusangnakwon.domain.feed.dto;

import java.time.LocalDateTime;

public interface RecordListDto {

    Long getId();

    FeedType getFeedType();

    LocalDateTime getDateCreated();

    String getTitle();

    String getContent();

    String getImage();

}