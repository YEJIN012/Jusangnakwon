package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.api.request.CreateCommentRequest;
import com.osakak.jusangnakwon.domain.feed.api.request.CreateFeedRequest;
import com.osakak.jusangnakwon.domain.feed.api.request.UpdateLikeRequest;
import com.osakak.jusangnakwon.domain.feed.api.response.CommentResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.FeedListResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.FeedResponse;
import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import java.util.List;
import java.util.stream.Collectors;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper
public interface FeedDtoMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "writer", ignore = true)
    @Mapping(target = "likeCnt", ignore = true)
    @Mapping(target = "liked", ignore = true)
    @Mapping(target = "comments", ignore = true)
    @Mapping(source = "ratingScore", target = "ratingScore")
    @Mapping(source = "dateCreated", target = "dateCreated")
    FeedDto createFeedRequestToFeedDto(CreateFeedRequest createFeedRequest);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "score", source = "ratingScore")
    RatingDto createFeedRequestToRatingDto(CreateFeedRequest createFeedRequest);

    FeedResponse feedDtoToFeedResponse(FeedDto feedDto);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "writer", ignore = true)
    @Mapping(target = "dateCreated", ignore = true)
    CommentDto createCommentRequestToCommentDto(CreateCommentRequest createCommentRequest);

    CommentResponse commentDtoToCommentResponse(CommentDto commentDto);

    FeedListResponse toFeedListResponse(List<FeedListDto> content, int totalPage, int curPageNumber);

}
