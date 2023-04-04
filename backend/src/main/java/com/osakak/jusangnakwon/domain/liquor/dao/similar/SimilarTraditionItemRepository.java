package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarTraditionItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimilarTraditionItemRepository extends JpaRepository<SimilarTraditionItem, Long> {
    @Query("SELECT r FROM SimilarTraditionItem r WHERE r.tradition.id IN :tradition")
    public List<SimilarTraditionItem> findAllByTraditionId(List<Long> tradition);
}
