package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Tradition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TraditionRepository extends JpaRepository<Tradition, Long> {
    /**
     * 전체 전통주 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 전통주 칵테일 리스트
     */
    @Query("select c from Tradition c order by c.ratingAvg desc")
    Page<Tradition> findByRatingAvg(Pageable pageable);
    @Query("select l from Tradition l where l.name like %:keyword%")
    Optional<List<Tradition>> findByKeyword(@Param("keyword") String keyword);
}
