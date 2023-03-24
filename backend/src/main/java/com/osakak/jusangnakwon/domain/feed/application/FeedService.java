package com.osakak.jusangnakwon.domain.feed.application;

import com.osakak.jusangnakwon.common.errors.UserNotFoundException;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dao.RatingRepository;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.feed.mapper.FeedMapper;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

    private final FeedRepository feedRepository;
    private final UserRepository userRepository;
    private final RatingRepository ratingRepository;

    private final FeedMapper feedMapper = Mappers.getMapper(FeedMapper.class);

    @Transactional
    public FeedDto createFeed(String id, FeedDto feedDto, RatingDto ratingDto) {
        User user = findUser(id);
        Feed feed = feedMapper.feedDtoToFeed(feedDto, user);
        Rating rating = feedMapper.ratingDtoToRating(ratingDto, user);
        feed = feedRepository.save(feed);
        ratingRepository.save(rating);
        feedDto = feedMapper.feedToFeedDto(feed);
        //feedDto에 like랑 likecnt 초기화 해줘야 됨.
        return feedDto;
    }

    private User findUser(String id) {
        User user = userRepository.findByUserId(id);
        if (user == null) {
            throw new UserNotFoundException(id);
        }
        return user;
    }
}
