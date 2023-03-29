package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Cocktail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CocktailRepository extends JpaRepository<Cocktail, Long> {
    /**
     * 전체 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 칵테일 리스트
     */
    @Query("select c from Cocktail c order by c.ratingAvg desc")
    Page<Cocktail> findByRatingAvg(Pageable pageable);
    @Query("select l from Cocktail l where l.name like %:keyword%")
    Optional<List<Cocktail>> findByKeyword(@Param("keyword") String keyword);
}
