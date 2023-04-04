package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Whisky;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WhiskyQueryRepository {
    /**
     * 유저의 취향 설문을 기준으로 술 데이터 조회
     * @param survey
     * @return List<Beer>
     */
    Page<Whisky> findByTaste(Survey survey, Pageable pagable);
}
