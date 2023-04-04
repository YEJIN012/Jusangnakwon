package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimilarBeerItemRepository extends JpaRepository<SimilarBeerItem, Long> {
    @Query("SELECT r FROM SimilarBeerItem r WHERE r.beer.id IN :beer")
    public List<SimilarBeerItem> findAllByBeerId(List<Long> beer);

}