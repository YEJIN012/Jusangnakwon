package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.QLiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.QWhisky;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Whisky;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;

import java.util.List;

import static com.osakak.jusangnakwon.domain.feed.entity.QScrap.scrap;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QWhisky.whisky;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QWine.wine;

public class WhiskyQueryRepositoryImpl implements WhiskyQueryRepository {

    private final JPAQueryFactory queryFactory;

    public WhiskyQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<LiquorListItemDto> findByTaste(Survey survey, Pageable pageable, Long userId) {
        List<LiquorListItemDto> content = queryFactory
                .select(new QLiquorListItemDto(whisky.id, whisky.name, whisky.img, whisky.liquorType, scrap.scrapped))
                .from(whisky)
                .leftJoin(scrap)
                .on(scrap.liquorId.eq(whisky.id),
                        scrap.liquorType.eq(whisky.liquorType),
                        scrap.user.id.eq(userId))
                .where(surveyBody(survey.getBody()))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();
        //카운트 쿼리 최적화
        Long count = queryFactory.select(whisky.count()).from(whisky).where(surveyBody(survey.getBody())).fetchOne();
        return new PageImpl<>(content, pageable, count);
    }

    private Predicate surveyBody(int taste) {
        if (taste == 0) {
            return whisky.body.lt(-1);
        } else if (taste == 1) {
            return whisky.body.between(-1, 0);
        } else {
            return whisky.body.gt(0);
        }
    }
}
