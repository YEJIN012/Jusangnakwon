package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.*;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface FeedQueryRepository {

    Page<FeedListDto> findFeedPageWithLike(Long userId, Pageable pageable);

    Page<FeedListDto> findFeedPageWithLikeByType(Long userId, FeedType type, Pageable pageable);

    List<CommentDto> findCommentListByFeedId(Long feedId);

    FeedDto findFeedWithRatingAndLike(Long userId, Long feedId);

    Page<LiquorListItemDto> findScrapPageByUserId(Long userId, Pageable pageable);

    List<ReviewListItemDto> findReviewsByUserIdAndDate(Long id, LocalDate date);
}
