package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import java.util.List;

public interface FeedQueryRepository {

    List<FeedDto> findFeedListWithRatingAndLike(Long userId);

    List<FeedDto> findFeedListWithRatingAndLikeByType(Long userId, String type);

    List<CommentDto> findCommentListByFeedId(Long feedId);

    FeedDto findFeedWithRatingAndLike(Long userId, Long feedId);
}
