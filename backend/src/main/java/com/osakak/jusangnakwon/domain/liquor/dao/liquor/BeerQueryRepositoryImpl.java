package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.QBeer;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import java.util.List;

import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QBeer.beer;

public class BeerQueryRepositoryImpl implements BeerQueryRepository {

    private final JPAQueryFactory queryFactory;

    public BeerQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<Beer> findByTaste(Survey survey, Pageable pageable) {
        List<Beer> content = queryFactory
                .select(new QBeer(beer))
                .from(beer)
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
