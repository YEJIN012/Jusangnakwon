package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemScrapDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.osakak.jusangnakwon.domain.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WineQueryRepository {

    /**
     * 유저의 취향 설문을 기준으로 술 데이터 조회
     * @param survey
     * @return List<Wine>
     */
    Page<LiquorListItemScrapDto> findByTaste(Survey survey, Pageable pagable, Long userId);
}
