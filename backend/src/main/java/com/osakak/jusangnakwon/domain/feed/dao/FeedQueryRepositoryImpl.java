package com.osakak.jusangnakwon.domain.feed.dao;

import static com.osakak.jusangnakwon.domain.feed.entity.QComment.comment;
import static com.osakak.jusangnakwon.domain.feed.entity.QFeed.feed;
import static com.osakak.jusangnakwon.domain.feed.entity.QLike.like;
import static com.osakak.jusangnakwon.domain.feed.entity.QRating.rating;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.feed.dto.QCommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.QFeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.QFeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.QWriterDto;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

public class FeedQueryRepositoryImpl implements FeedQueryRepository {

    private final JPAQueryFactory queryFactory;

    public FeedQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<FeedListDto> findFeedPageWithRatingAndLike(Long userId, Pageable pageable) {
        List<FeedListDto> content = queryFactory.select(
                        new QFeedListDto(feed.id, feed.type, feed.img, feed.title, feed.content,
                                feed.isPublic, feed.dateCreated,
                                new QWriterDto(feed.user.username, feed.user.profileImageUrl),
                                ExpressionUtils.as(JPAExpressions.select(like.id.count()).from(like)
                                        .where(like.feed.id.eq(feed.id), like.isLiked.isTrue()), "likeCnt"),
                                ExpressionUtils.as(JPAExpressions.selectFrom(like)
                                        .where(like.user.id.eq(userId), like.feed.id.eq(feed.id),
                                                like.isLiked.isTrue()).exists(), "liked"))).from(feed)
                .where(feed.isPublic.eq(true))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .orderBy(feed.dateCreated.desc()).fetch();

        //카운트 쿼리 최적화
        Long count = queryFactory.select(feed.count()).from(feed).where(feed.isPublic.eq(true)).fetchOne();

        return new PageImpl<>(content, pageable, count);
    }

    @Override
    public Page<FeedListDto> findFeedPageWithRatingAndLikeByType(Long userId, FeedType type,
            Pageable pageable) {
        List<FeedListDto> content = queryFactory.select(
                        new QFeedListDto(feed.id, feed.type, feed.img, feed.title, feed.content,
                                feed.isPublic, feed.dateCreated,
                                new QWriterDto(feed.user.username, feed.user.profileImageUrl),
                                ExpressionUtils.as(JPAExpressions.select(like.id.count()).from(like)
                                        .where(like.feed.id.eq(feed.id), like.isLiked.isTrue()), "likeCnt"),
                                ExpressionUtils.as(JPAExpressions.selectFrom(like)
                                        .where(like.user.id.eq(userId), like.feed.id.eq(feed.id),
                                                like.isLiked.isTrue()).exists(), "liked"))).from(feed)
                .where(feed.type.eq(type), feed.isPublic.eq(true)).offset(pageable.getOffset())
                .limit(pageable.getPageSize()).orderBy(feed.dateCreated.desc()).fetch();

        //카운트 쿼리 최적화
        Long count = queryFactory.select(feed.count()).from(feed).where(feed.type.eq(type), feed.isPublic.eq(true))
                .fetchOne();

        return new PageImpl<>(content, pageable, count);

    }

    @Override
    public FeedDto findFeedWithRatingAndLike(Long userId, Long feedId) {
        return queryFactory.select(
                        new QFeedDto(feed.id, feed.type, feed.img, feed.title, feed.liquorId,
                                feed.liquorType, feed.liquorName, feed.content, rating.score, feed.isPublic,
                                feed.dateCreated,
                                new QWriterDto(feed.user.username, feed.user.profileImageUrl),
                                ExpressionUtils.as(JPAExpressions.select(like.id.count()).from(like)
                                        .where(like.feed.id.eq(feed.id), like.isLiked.isTrue()), "likeCnt"),
                                ExpressionUtils.as(JPAExpressions.selectFrom(like)
                                        .where(like.user.id.eq(userId), like.feed.id.eq(feed.id),
                                                like.isLiked.isTrue()).exists(), "liked"))).from(feed)
                .leftJoin(rating)
                .on(feed.user.id.eq(rating.user.id), feed.liquorId.eq(rating.liquorId),
                        feed.liquorType.eq(rating.liquorType)).where(feed.id.eq(feedId)).fetchOne();
    }

    @Override
    public List<CommentDto> findCommentListByFeedId(Long feedId) {
        return queryFactory.select(new QCommentDto(comment.id,
                        new QWriterDto(comment.user.username, comment.user.profileImageUrl),
                        comment.feed.id, comment.content, comment.dateCreated)).from(comment)
                .where(comment.feed.id.eq(feedId))
                .orderBy(comment.dateCreated.asc()).fetch();
    }
}
