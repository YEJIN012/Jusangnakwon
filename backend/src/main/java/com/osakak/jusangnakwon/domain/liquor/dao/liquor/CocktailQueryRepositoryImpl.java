package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Cocktail;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.QCocktail;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import java.util.List;

import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QBeer.beer;
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QCocktail.cocktail;

public class CocktailQueryRepositoryImpl implements CocktailQueryRepository {

    private final JPAQueryFactory queryFactory;

    public CocktailQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<Cocktail> findByTaste(Survey survey, Pageable pageable) {
        List<Cocktail> content = queryFactory
                .select(new QCocktail(cocktail))
                .from(cocktail)
                .where(surveySweet(survey.getSweetness()))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();
        //카운트 쿼리 최적화
        Long count = queryFactory.select(cocktail.id.count()).from(cocktail).where(surveySweet(survey.getSweetness())).fetchOne();
        return new PageImpl<>(content, pageable, count);
    }

    private Predicate surveySweet(int taste) {
        if (taste == 0) {
            return cocktail.sweet.lt(40);
        } else if (taste == 1) {
            return cocktail.sweet.between(40, 50);
        } else {
            return cocktail.sweet.gt(50);
        }
    }
}
