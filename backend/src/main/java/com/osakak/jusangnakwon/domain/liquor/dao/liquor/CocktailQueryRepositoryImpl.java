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
import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QCocktail.cocktail;

public class CocktailQueryRepositoryImpl implements CocktailQueryRepository {

    private final JPAQueryFactory queryFactory;

    public CocktailQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<LiquorListItemDto> findByTaste(Survey survey, Pageable pageable, Long userId) {
        List<LiquorListItemDto> content = queryFactory
                .select(new QLiquorListItemDto(cocktail.id, cocktail.name, cocktail.img, cocktail.liquorType, scrap.scrapped))
                .distinct()
                .from(cocktail)
                .leftJoin(scrap)
                .on(scrap.liquorId.eq(cocktail.id),
                        cocktail.liquorType.eq(cocktail.liquorType),
                        scrap.user.id.eq(userId))
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
