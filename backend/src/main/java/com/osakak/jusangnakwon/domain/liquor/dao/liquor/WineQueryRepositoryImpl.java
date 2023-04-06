package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.QLiquorListItemDto;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import java.util.List;

import static com.osakak.jusangnakwon.domain.feed.entity.QScrap.scrap;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QWine.wine;

public class WineQueryRepositoryImpl implements WineQueryRepository {

    private final JPAQueryFactory queryFactory;

    public WineQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<LiquorListItemDto> findByTaste(Survey survey, Pageable pageable, Long userId) {

        List<LiquorListItemDto> content = queryFactory
                .select(new QLiquorListItemDto(wine.id, wine.name, wine.img, wine.liquorType, scrap.scrapped))
                .distinct()
                .from(wine)
                .leftJoin(scrap)
                .on(scrap.liquorId.eq(wine.id),
                        scrap.liquorType.eq(wine.liquorType),
                        scrap.user.id.eq(userId))
                .where(surveySweet(survey.getSweetness()))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();
        //카운트 쿼리 최적화
        Long count = queryFactory.select(wine.id.count()).from(wine).where(surveySweet(survey.getSweetness())).fetchOne();
        return new PageImpl<>(content, pageable, count);
    }

    private com.querydsl.core.types.Predicate surveyBody(int taste) {
        if (taste == 0) {
            return wine.body.lt(2.1);
        } else if (taste == 1) {
            return wine.body.between(2.1, 3);
        } else {
            return wine.body.gt(3);
        }
    }

    private Predicate surveySweet(int taste) {
        if (taste == 0) {
            return wine.sweetness.loe(1);
        } else if (taste == 1) {
            return wine.sweetness.between(1, 3);
        } else {
            return wine.sweetness.gt(3);
        }
    }
}
