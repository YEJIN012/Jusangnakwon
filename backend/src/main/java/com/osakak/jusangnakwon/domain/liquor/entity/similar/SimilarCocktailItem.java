package com.osakak.jusangnakwon.domain.liquor.entity.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Cocktail;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SimilarCocktailItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Embedded
    private SimilarItemValueType similarLiquor;
    @OneToOne
    @JoinColumn(name = "cocktail_id")
    private Cocktail cocktail;

    @Builder
    public SimilarCocktailItem(Long id, SimilarItemValueType similarLiquor, Cocktail cocktail) {
        this.id = id;
        this.similarLiquor = similarLiquor;
        this.cocktail = cocktail;
    }
}
