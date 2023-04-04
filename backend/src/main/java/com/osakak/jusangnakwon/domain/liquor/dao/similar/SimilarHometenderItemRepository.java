package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarHometenderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimilarHometenderItemRepository extends JpaRepository<SimilarHometenderItem, Long> {
    @Query("SELECT r FROM SimilarHometenderItem r WHERE r.hometender.id IN :hometender")
    public List<SimilarHometenderItem> findAllByHometenderId(List<Long> hometender);
}
