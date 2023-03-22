package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.api.request.WriteFeedRequest;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface FeedDtoMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "writerProfileImg", ignore = true)
    @Mapping(target = "writerName", ignore = true)
    @Mapping(target = "likeCnt", ignore = true)
    @Mapping(target = "liked", ignore = true)
    @Mapping(target = "comments", ignore = true)
    FeedDto fromWriteRequest(WriteFeedRequest writeFeedRequest);
}
