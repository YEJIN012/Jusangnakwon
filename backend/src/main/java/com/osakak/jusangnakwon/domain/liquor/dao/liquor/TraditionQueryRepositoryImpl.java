package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.QTradition;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Tradition;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import java.util.List;

import static com.osakak.jusangnakwon.domain.liquor.entity.liquor.QTradition.tradition;

public class TraditionQueryRepositoryImpl implements TraditionQueryRepository {

    private final JPAQueryFactory queryFactory;

    public TraditionQueryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<Tradition> findByTaste(Survey survey, Pageable pageable) {
        System.out.println(survey);
        System.out.println(pageable);
        List<Tradition> content = queryFactory
                .select(new QTradition(tradition))
                .from(tradition)
                .where(surveySour(survey.getSour()))
                .offset(pageable.getOffset()).limit(pageable.getPageSize())
                .fetch();
        //카운트 쿼리 최적화
        Long count = queryFactory.select(tradition.id.count()).from(tradition).where(surveySour(survey.getSour())).fetchOne();
        return new PageImpl<>(content, pageable, count);
    }

    private Predicate surveySour(int taste) {
        if (taste == 0) {
            return tradition.acidity.lt(1.5);
        } else if (taste == 1) {
            return tradition.acidity.between(1.5, 3);
        } else {
            return tradition.acidity.gt(3);
        }
    }
}
