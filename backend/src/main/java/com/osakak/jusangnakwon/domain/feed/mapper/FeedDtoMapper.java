package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.api.request.WriteFeedRequest;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface FeedDtoMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "writer", ignore = true)
    @Mapping(target = "likeCnt", ignore = true)
    @Mapping(target = "liked", ignore = true)
    @Mapping(target = "comments", ignore = true)
    FeedDto writeFeedRequestToFeedDto(WriteFeedRequest writeFeedRequest);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "score", source = "ratingScore")
    RatingDto writeFeedRequestToRatingDto(WriteFeedRequest writeFeedRequest);
}
