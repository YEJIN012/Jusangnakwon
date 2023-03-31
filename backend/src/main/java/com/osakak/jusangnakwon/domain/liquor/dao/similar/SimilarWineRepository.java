package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarWineItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimilarWineRepository extends JpaRepository<SimilarWineItem, Long> {
}
