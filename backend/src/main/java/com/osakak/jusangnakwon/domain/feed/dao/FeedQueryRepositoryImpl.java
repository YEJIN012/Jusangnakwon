package com.osakak.jusangnakwon.domain.feed.dao;

import static com.osakak.jusangnakwon.domain.feed.entity.QComment.comment;
import static com.osakak.jusangnakwon.domain.feed.entity.QFeed.feed;
import static com.osakak.jusangnakwon.domain.feed.entity.QLike.like;
import static com.osakak.jusangnakwon.domain.feed.entity.QRating.rating;
import static com.osakak.jusangnakwon.domain.feed.entity.QScrap.scrap;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QBeer.beer;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QCocktail.cocktail;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QHometender.hometender;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QTradition.tradition;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QWhisky.whisky;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QWine.wine;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedType;
import com.osakak.jusangnakwon.domain.feed.dto.QCommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.QFeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.QFeedListDto;
import com.osakak.jusangnakwon.domain.feed.dto.QWriterDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.QLiquorListItemDto;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Template;
import com.querydsl.core.types.TemplateFactory;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.core.types.dsl.CaseBuilder.Cases;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.SimpleExpression;
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

    @Override
    public Page<LiquorListItemDto> findScrapPageByUserId(Long userId, Pageable pageable) {

        Expression<String> getLiquorImg = ExpressionUtils.<String>as(new CaseBuilder()
                        .when(scrap.liquorType.eq(LiquorType.WINE))
                        .then(JPAExpressions.select(wine.img).from(wine)
                                .where(wine.id.eq(scrap.liquorId)))
                        .when(scrap.liquorType.eq(LiquorType.BEER))
                        .then(JPAExpressions.select(beer.img).from(beer)
                                .where(beer.id.eq(scrap.liquorId)))
                        .when(scrap.liquorType.eq(LiquorType.COCKTAIL))
                        .then(JPAExpressions.select(cocktail.img).from(cocktail)
                                .where(cocktail.id.eq(scrap.liquorId)))
                        .when(scrap.liquorType.eq(LiquorType.HOMETENDER))
                        .then(JPAExpressions.select(hometender.img).from(hometender)
                                .where(hometender.id.eq(scrap.liquorId)))
                        .when(scrap.liquorType.eq(LiquorType.TRADITION))
                        .then(JPAExpressions.select(tradition.img).from(tradition)
                                .where(tradition.id.eq(scrap.liquorId)))
                        .when(scrap.liquorType.eq(LiquorType.WHISKY))
                        .then(JPAExpressions.select(whisky.img).from(whisky)
                                .where(whisky.id.eq(scrap.liquorId)))
                        .otherwise("null"),
                "img");

        List<LiquorListItemDto> content = queryFactory.select(
                        new QLiquorListItemDto(scrap.liquorId, scrap.liquorName
                                , getLiquorImg
                                , scrap.liquorType))
                                .from(scrap)
                .where(scrap.user.id.eq(userId))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .orderBy(scrap.id.desc())
                .fetch();

        Long count = queryFactory.select(scrap.id.count()).from(scrap).where(scrap.user.id.eq(userId)).fetchOne();

        return new PageImpl<>(content, pageable, count);

    }
}
