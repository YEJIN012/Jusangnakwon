package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WineRepository extends JpaRepository<Wine, String> {
    /**
     * 전체 와인 랭킹순 조회
     * @param pageable 페이징 정보
     * @return 페이징 포함 와인 리스트
     */
    @Query("select w from Wine w order by w.ratingAvg desc")
    Page<Wine> findByRatingAvg(Pageable pageable);
}