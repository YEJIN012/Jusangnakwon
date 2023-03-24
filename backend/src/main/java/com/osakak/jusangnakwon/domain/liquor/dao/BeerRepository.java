package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface BeerRepository extends JpaRepository<Beer, Long> {
    /**
     * 전체 맥주 랭킹순 조회
     * @param pageable 페이징 정보
     * @return 페이징 포함 맥주 리스트
     */
    @Query("select b from Beer b order by b.ratingAvg desc")
    Page<Beer> findByRatingAvg(Pageable pageable);
}
