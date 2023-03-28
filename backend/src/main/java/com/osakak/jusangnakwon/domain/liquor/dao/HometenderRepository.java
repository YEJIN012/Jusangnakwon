package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Hometender;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HometenderRepository extends JpaRepository<Hometender, Long> {
    /**
     * 전체 커스텀 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 커스텀 칵테일 리스트
     */
    @Query("select c from Hometender c order by c.ratingAvg desc")
    Page<Hometender> findByRatingAvg(Pageable pageable);

    @Query("select l from Hometender l where l.name like %:keyword%")
    List<Hometender> findByKeyword(@Param("keyword") String keyword);

    /**
     * 칵테일 랜덤 조회
     *
     * @return 랜덤으로 뽑힌 칵테일 반환
     */
    @Query("select l from Hometender l order by FUNCTION('RAND')")
    Page<Hometender> findByRandom(Pageable pageable);
}
