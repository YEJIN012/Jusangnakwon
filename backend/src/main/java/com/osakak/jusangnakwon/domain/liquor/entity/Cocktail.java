package com.osakak.jusangnakwon.domain.liquor.entity;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
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
@Schema(description = "칵테일 테이블")
@Entity
public class Cocktail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Builder
    public Cocktail(Long id, String name, String img, int alcohol, String type, String baseWine, int baseWineAmt, String liquor, int liquor_amt, String juice, int juice_amt, String spice, int spice_amt, String soda, int soda_amt, String others, int salty, int savory, int sour, int bitter, int sweet, int spicy, LiquorType liquorType) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.alcohol = alcohol;
        this.type = type;
        this.baseWine = baseWine;
        this.baseWineAmt = baseWineAmt;
        this.liquor = liquor;
        this.liquor_amt = liquor_amt;
        this.juice = juice;
        this.juice_amt = juice_amt;
        this.spice = spice;
        this.spice_amt = spice_amt;
        this.soda = soda;
        this.soda_amt = soda_amt;
        this.others = others;
        this.salty = salty;
        this.savory = savory;
        this.sour = sour;
        this.bitter = bitter;
        this.sweet = sweet;
        this.spicy = spicy;
        this.liquorType = liquorType;
    }
}
