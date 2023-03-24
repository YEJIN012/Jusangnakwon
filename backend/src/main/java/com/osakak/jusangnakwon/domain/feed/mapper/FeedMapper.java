package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface FeedMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "user", target = "user")
    Feed feedDtoToFeed(FeedDto feedDto, User user);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "user", target = "user")
    Rating ratingDtoToRating(RatingDto ratingDto, User user);

    @Mapping(source = "user.username", target = "writer.username")
    @Mapping(source = "user.profileImageUrl", target = "writer.profileImg")
    @Mapping(target = "likeCnt", ignore = true)
    @Mapping(target = "liked", ignore = true)
    @Mapping(target = "comments", ignore = true)
    FeedDto feedToFeedDto(Feed feed);
}
