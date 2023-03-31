package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimilarBeerRepository extends JpaRepository<SimilarBeerItem, Long> {
}
