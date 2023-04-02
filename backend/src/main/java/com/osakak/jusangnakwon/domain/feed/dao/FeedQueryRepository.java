package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FeedQueryRepository {

    Page<FeedListDto> findFeedPageWithRatingAndLike(Long userId, Pageable pageable);

    Page<FeedListDto> findFeedPageWithRatingAndLikeByType(Long userId, FeedType type, Pageable pageable);

    List<CommentDto> findCommentListByFeedId(Long feedId);

    FeedDto findFeedWithRatingAndLike(Long userId, Long feedId);
}
