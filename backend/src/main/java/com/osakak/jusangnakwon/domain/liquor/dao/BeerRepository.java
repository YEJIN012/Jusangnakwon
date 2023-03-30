package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface BeerRepository extends JpaRepository<Beer, Long> {
    /**
     * 전체 맥주 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 맥주 리스트
     */
    @Query("select b from Beer b order by b.ratingAvg desc")
    Page<Beer> findByRatingAvg(Pageable pageable);

    /**
     * 키워드를 포함하는 술 이름 조회 (다른 주종 동일)
     *
     * @param keyword 사용자 입력 키워드
     * @return 술 객체 리스트
     */
    @Query("select l from Beer l where l.name like :keyword%")
    Optional<List<Beer>> findByKeyword(@Param("keyword") String keyword);

    Optional<Beer> findById(Long id);


}