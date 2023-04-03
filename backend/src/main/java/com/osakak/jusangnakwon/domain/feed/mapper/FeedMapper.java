package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.entity.Comment;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.user.entity.User;
import java.util.List;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper
public interface FeedMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "comments", ignore = true)
    @Mapping(source = "user", target = "user")
    @Mapping(source = "feedDto.dateCreated", target = "dateCreated")
    Feed feedDtoToFeed(FeedDto feedDto, User user);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "user", target = "user")
    Rating ratingDtoToRating(RatingDto ratingDto, User user);

    @Mapping(source = "user.username", target = "writer.username")
    @Mapping(source = "user.profileImageUrl", target = "writer.profileImg")
    @Mapping(target = "ratingScore", ignore = true)
    @Mapping(target = "likeCnt", ignore = true)
    @Mapping(target = "liked", ignore = true)
    @Mapping(target = "comments", ignore = true)
    @Mapping(source = "dateCreated", target = "dateCreated")
    FeedDto feedToFeedDto(Feed feed);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "user", target = "user")
    @Mapping(source = "feed", target = "feed")
    @Mapping(source = "commentDto.content", target = "content")
    @Mapping(target = "dateCreated", ignore = true)
    Comment commentDtoToComment(CommentDto commentDto, User user, Feed feed);

}
