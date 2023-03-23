package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarCocktailItem;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarHometenderItem;
import io.swagger.annotations.ApiModel;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@ApiModel(value = "hometender")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Hometender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    private String name;
    @Column(name = "image")
    private String img;
    private String materials;
    private int salty;
    private int sour;
    private int bitter;
    private int sweet;
    @Column(name = "liquor_type")
    private LiquorType liquorType;
    @OneToOne(mappedBy = "hometender")
    private SimilarHometenderItem similarHometenderItem;

    @Builder
    public Hometender(Long id, String name, String img, String materials, int salty, int sour, int bitter, int sweet, LiquorType liquorType, SimilarHometenderItem similarHometenderItem) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.materials = materials;
        this.salty = salty;
        this.sour = sour;
        this.bitter = bitter;
        this.sweet = sweet;
        this.liquorType = liquorType;
        this.similarHometenderItem = similarHometenderItem;
    }
}
