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
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QBeer.beer;

public class BeerQueryRepositoryImpl implements BeerQueryRepository {

    private final JPAQueryFactory queryFactory;

    public BeerQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<LiquorListItemDto> findByTaste(Survey survey, Pageable pageable, Long userId) {
        List<LiquorListItemDto> content = queryFactory
                .select(new QLiquorListItemDto(beer.id, beer.name, beer.img, beer.liquorType, scrap.scrapped))
                .distinct()
                .from(beer)
                .leftJoin(scrap)
                .on(scrap.liquorId.eq(beer.id),
                        scrap.liquorType.eq(beer.liquorType),
                        scrap.user.id.eq(userId))
                .where(surveyBody(survey.getBody()))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();
        //카운트 쿼리 최적화
        Long count = queryFactory.select(beer.id.count()).from(beer).where(surveyBody(survey.getBody())).fetchOne();
        return new PageImpl<>(content, pageable, count);
    }

    private Predicate surveyBody(int taste) {
        if (taste == 0) {
            return beer.mouthfeel.lt(9);
        } else if (taste == 1) {
            return beer.mouthfeel.between(9, 12);
        } else {
            return beer.mouthfeel.gt(12);
        }
    }
}
