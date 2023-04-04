package com.osakak.jusangnakwon.domain.liquor.dao.similar;

import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarCocktailItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SimilarCocktailItemRepository extends JpaRepository<SimilarCocktailItem, Long> {
    @Query("SELECT r FROM SimilarCocktailItem r WHERE r.cocktail.id IN :cocktail")
    public List<SimilarCocktailItem> findAllByCocktailId(List<Long> cocktail);
}
