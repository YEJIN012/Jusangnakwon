package com.osakak.jusangnakwon.domain.feed.dao;

import static com.osakak.jusangnakwon.domain.feed.entity.QComment.comment;
import static com.osakak.jusangnakwon.domain.feed.entity.QFeed.feed;
import static com.osakak.jusangnakwon.domain.feed.entity.QLike.like;
import static com.osakak.jusangnakwon.domain.feed.entity.QRating.rating;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.QCommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.QFeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.QWriterDto;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import javax.persistence.EntityManager;

public class FeedQueryRepositoryImpl implements FeedQueryRepository {

    private final JPAQueryFactory queryFactory;

    public FeedQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<FeedDto> findFeedListWithRatingAndLike(Long userId) {
        return queryFactory.select(
                        new QFeedDto(feed.id, feed.type, feed.img, feed.title, feed.liquorType,
                                feed.liquorName, feed.content, rating.score, feed.isPublic,
                                feed.dateCreated,
                                new QWriterDto(feed.user.username, feed.user.profileImageUrl),
                                ExpressionUtils.as(JPAExpressions.select(like.id.count()).from(like)
                                        .where(like.feed.id.eq(feed.id), like.isLiked.isTrue()), "likeCnt"),
                                ExpressionUtils.as(JPAExpressions.selectFrom(like)
                                        .where(like.user.id.eq(userId), like.feed.id.eq(feed.id),
                                                like.isLiked.isTrue()).exists(), "liked")))
                .from(feed)
                .leftJoin(rating)
                .on(feed.user.id.eq(rating.user.id), feed.liquorName.eq(rating.liquorName),
                        feed.liquorType.eq(rating.liquorType))
                .orderBy(feed.dateCreated.desc())
                .fetch();
    }

    @Override
    public List<FeedDto> findFeedListWithRatingAndLikeByType(Long userId, String type) {
        return queryFactory.select(
                        new QFeedDto(feed.id, feed.type, feed.img, feed.title, feed.liquorType,
                                feed.liquorName, feed.content, rating.score, feed.isPublic,
                                feed.dateCreated,
                                new QWriterDto(feed.user.username, feed.user.profileImageUrl),
                                ExpressionUtils.as(JPAExpressions.select(like.id.count()).from(like)
                                        .where(like.feed.id.eq(feed.id), like.isLiked.isTrue()), "likeCnt"),
                                ExpressionUtils.as(JPAExpressions.selectFrom(like)
                                        .where(like.user.id.eq(userId), like.feed.id.eq(feed.id),
                                                like.isLiked.isTrue()).exists(), "liked")))
                .from(feed)
                .leftJoin(rating)
                .on(feed.user.id.eq(rating.user.id), feed.liquorName.eq(rating.liquorName),
                        feed.liquorType.eq(rating.liquorType))
                .where(feed.type.eq(type))
                .orderBy(feed.dateCreated.desc())
                .fetch();

    }

    @Override
    public FeedDto findFeedWithRatingAndLike(Long userId, Long feedId) {
        return queryFactory.select(
                        new QFeedDto(feed.id, feed.type, feed.img, feed.title, feed.liquorType,
                                feed.liquorName, feed.content, rating.score, feed.isPublic,
                                feed.dateCreated,
                                new QWriterDto(feed.user.username, feed.user.profileImageUrl),
                                ExpressionUtils.as(JPAExpressions.select(like.id.count()).from(like)
                                        .where(like.feed.id.eq(feed.id), like.isLiked.isTrue()), "likeCnt"),
                                ExpressionUtils.as(JPAExpressions.selectFrom(like)
                                        .where(like.user.id.eq(userId), like.feed.id.eq(feed.id),
                                                like.isLiked.isTrue()).exists(), "liked")))
                .from(feed)
                .leftJoin(rating)
                .on(feed.user.id.eq(rating.user.id), feed.liquorName.eq(rating.liquorName),
                        feed.liquorType.eq(rating.liquorType))
        .where(feed.id.eq(feedId)).fetchOne();
    }

    @Override
    public List<CommentDto> findCommentListByFeedId(Long feedId) {
        return queryFactory.select(new QCommentDto(comment.id,
                        new QWriterDto(comment.user.username, comment.user.profileImageUrl),
                        comment.feed.id, comment.content, comment.dateCreated)).from(comment)
                .orderBy(comment.dateCreated.asc()).fetch();
    }
}
