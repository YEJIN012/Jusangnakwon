package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarCocktailItem;
import io.swagger.annotations.ApiModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@ApiModel(value = "cocktail")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Schema(description = "칵테일 테이블")
@Entity
public class Cocktail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    @Schema(description = "칵테일 이름")
    private String name;
    private String img;
    private int alcohol;
    private String type;
    @Column(name = "base_wine")
    private String baseWine;
    private int baseWineAmt;
    private String liquor;
    private int liquor_amt;
    private String juice;
    private int juice_amt;
    private String spice;
    private int spice_amt;
    private String soda;
    private int soda_amt;
    private String others;
    private int salty;
    private int savory;
    private int sour;
    private int bitter;
    private int sweet;
    private int spicy;
    @Column(name = "liquor_type")
    private LiquorType liquorType;
    @OneToOne(mappedBy = "cocktail")
    private SimilarCocktailItem similarCocktailItem;

}
