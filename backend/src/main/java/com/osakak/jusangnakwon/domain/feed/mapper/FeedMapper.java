package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface FeedMapper {

    /*
    @Mapping(target = "id", ignore = true)
    @Mapping(source = "user.profileImageUrl", target = "writerProfileImg")
    @Mapping(source = "user.id", target = "writerId")
    @Mapping(source = "user.targetTime", target = "writerName")

    @Mapping(source = "user", target = "user")
    Feed feedDtotoFeed(FeedDto feedDto, User user);
     */
}
