package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Cocktail;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Hometender;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface HometenderRepository extends JpaRepository<Hometender, Long> {
    /**
     * 전체 커스텀 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 커스텀 칵테일 리스트
     */
    @Query("select c from Hometender c order by c.ratingAvg desc")
    Page<Hometender> findByRatingAvg(Pageable pageable);
}
