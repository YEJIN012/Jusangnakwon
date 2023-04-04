package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarCocktailItem;
import io.swagger.annotations.ApiModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@ApiModel(value = "cocktail")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Cocktail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    @Column(length = 50, nullable = false)
    private String name;
    @Column(length = 30)
    private String img;
    @Column(length = 30)
    private Integer alcohol;
    @Column(length = 30)
    private String type;
    @Column(name = "base_wine", length = 100)
    private String baseWine;
    @Column(name = "base_wine_amt", length = 30)
    private Integer baseWineAmt;
    @Column(length = 30)
    private String liquor;
    @Column(name = "liquor_amt", length = 30)
    private Integer liquorAmt;
    @Column(length = 30)
    private String juice;
    @Column(name = "juice_amt", length = 30)
    private Integer juiceAmt;
    @Column(length = 30)
    private String spice;
    @Column(name = "spice_amt", length = 30)
    private Integer spiceAmt;
    @Column(length = 30)
    private String soda;
    @Column(name = "soda_amt", length = 30)
    private Integer sodaAmt;
    @Column(length = 30)
    private String others;
    @Column(length = 30)
    private Integer salty;
    @Column(length = 30)
    private Integer savory;
    @Column(length = 30)
    private Integer sour;
    @Column(length = 30)
    private Integer bitter;
    @Column(length = 30)
    private Integer sweet;
    @Column(length = 30)
    private Integer spicy;
    @Column(name = "liquor_type", columnDefinition = "VARCHAR(10) DEFAULT 'COCKTAIL'")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    @OneToOne(mappedBy = "cocktail")
    private SimilarCocktailItem similarCocktailItem;

    @Column(name = "rating_avg", columnDefinition = "double DEFAULT 0")
    private double ratingAvg;

    @Builder
    public Cocktail(Long id, String name, String img, Integer alcohol, String type, String baseWine, Integer baseWineAmt, String liquor, Integer liquorAmt, String juice, Integer juiceAmt, String spice, Integer spiceAmt, String soda, Integer sodaAmt, String others, Integer salty, Integer savory, Integer sour, Integer bitter, Integer sweet, Integer spicy, LiquorType liquorType, SimilarCocktailItem similarCocktailItem, double ratingAvg) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.alcohol = alcohol;
        this.type = type;
        this.baseWine = baseWine;
        this.baseWineAmt = baseWineAmt;
        this.liquor = liquor;
        this.liquorAmt = liquorAmt;
        this.juice = juice;
        this.juiceAmt = juiceAmt;
        this.spice = spice;
        this.spiceAmt = spiceAmt;
        this.soda = soda;
        this.sodaAmt = sodaAmt;
        this.others = others;
        this.salty = salty;
        this.savory = savory;
        this.sour = sour;
        this.bitter = bitter;
        this.sweet = sweet;
        this.spicy = spicy;
        this.liquorType = liquorType;
        this.similarCocktailItem = similarCocktailItem;
        this.ratingAvg = ratingAvg;
    }
}
