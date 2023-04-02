package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.ReviewListItemDto;
import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FeedQueryRepository {

    Page<FeedListDto> findFeedPageWithLike(Long userId, Pageable pageable);

    Page<FeedListDto> findFeedPageWithLikeByType(Long userId, FeedType type, Pageable pageable);

    List<CommentDto> findCommentListByFeedId(Long feedId);

    FeedDto findFeedWithRatingAndLike(Long userId, Long feedId);

    Page<LiquorListItemDto> findScrapPageByUserId(Long userId, Pageable pageable);

    List<ReviewListItemDto> findReviewsByUserIdAndDate(Long id, LocalDate date);
}
