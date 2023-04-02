package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.api.request.CreateCommentRequest;
import com.osakak.jusangnakwon.domain.feed.api.request.CreateFeedRequest;
import com.osakak.jusangnakwon.domain.feed.api.response.CommentResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.FeedListResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.FeedResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.RecordListResponse;
import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface MypageDtoMapper {

    RecordListResponse toRecordListResponse(List<RecordListDto> content, int totalPage, int curPageNumber);
}
