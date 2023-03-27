package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
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
    @Column(length = 30)
    private String name;
    @Column(name = "image", length = 100)
    private String img;
    @Column(length = 30)
    private String materials;
    @Column(length = 30)
    private Integer salty;
    @Column(length = 30)
    private Integer sour;
    @Column(length = 30)
    private Integer bitter;
    @Column(length = 30)
    private Integer sweet;
    @Column(name = "liquor_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    @OneToOne(mappedBy = "hometender")
    private SimilarHometenderItem similarHometenderItem;

    @Column(name = "rating_avg", length = 20)
    private double ratingAvg;

    @Builder
    public Hometender(Long id, String name, String img, String materials, Integer salty, Integer sour, Integer bitter, Integer sweet, LiquorType liquorType, SimilarHometenderItem similarHometenderItem, double ratingAvg) {
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
        this.ratingAvg = ratingAvg;
    }
}
