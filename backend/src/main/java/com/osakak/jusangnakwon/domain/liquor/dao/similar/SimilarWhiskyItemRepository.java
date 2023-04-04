package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarWhiskyItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimilarWhiskyItemRepository extends JpaRepository<SimilarWhiskyItem,Long> {
    @Query("SELECT r FROM SimilarWhiskyItem r WHERE r.whisky.id IN :whisky")
    public List<SimilarWhiskyItem> findAllByWhiskyId(List<Long> whisky);
}
