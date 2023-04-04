package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarWineItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimilarWineItemRepository extends JpaRepository<SimilarWineItem,Long> {
    @Query("SELECT r FROM SimilarWineItem r WHERE r.wine.id IN :wine")
    public List<SimilarWineItem> findAllByWineId(List<Long> wine);

}
