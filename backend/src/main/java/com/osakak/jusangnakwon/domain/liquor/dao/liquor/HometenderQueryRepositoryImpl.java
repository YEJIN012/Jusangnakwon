package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Hometender;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.QHometender;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;

import java.util.List;

import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QCocktail.cocktail;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QHometender.hometender;

public class HometenderQueryRepositoryImpl implements HometenderQueryRepository {
    private final JPAQueryFactory queryFactory;

    public HometenderQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<Hometender> findByTaste(Survey survey, Pageable pageable) {
        List<Hometender> content = queryFactory
                .select(new QHometender(hometender))
                .from(hometender)
                .where(surveySweet(survey.getSweetness()))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();
        //카운트 쿼리 최적화
        Long count = queryFactory.select(hometender.id.count()).from(hometender).where(surveySweet(survey.getSweetness())).fetchOne();
        return new PageImpl<>(content, pageable, count);
    }

    private Predicate surveySweet(int taste) {
        if (taste == 0) {
            return hometender.sweet.lt(30);
        } else if (taste == 1) {
            return hometender.sweet.between(30, 60);
        } else {
            return hometender.sweet.gt(60);
        }
    }
}
