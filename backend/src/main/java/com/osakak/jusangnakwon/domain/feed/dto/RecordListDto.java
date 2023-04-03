package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

public interface RecordListDto {

    FeedType getFeedType();
    LocalDateTime getDateCreated();
    String getTitle();
    String getContent();
    String getImage();

}
