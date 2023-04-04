package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarTraditionItem;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Tradition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    @Column(length = 30)
    private String name;
    @Column(length = 30)
    private String price;
    @Column(length = 30)
    private String img;
    @Column(length = 30)
    private Double alcohol;
    @Column(length = 30)
    private String size;

    private String materials;
    @Column(length = 30)
    private String brewery;
    @Column(length = 30)
    private String description;
    @Column(length = 30)
    private Double sweetness;
    @Column(length = 30)
    private Double acidity;
    @Column(length = 30)
    private Double freshness;
    @Column(length = 30)
    private Integer body;
    @Column(name = "liquor_type", columnDefinition = "VARCHAR(10) DEFAULT 'TRADITION'")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    @OneToOne(mappedBy = "tradition")
    private SimilarTraditionItem similarTraditionalLiquorItem;

    @Column(name = "rating_avg", columnDefinition = "double DEFAULT 0")
    private double ratingAvg;

    @Builder
    public Tradition(Long id, String name, String price, String img, double alcohol, String size, String materials, String brewery, String description, double sweetness, double acidity, double freshness, int body, LiquorType liquorType, SimilarTraditionItem similarTraditionalLiquorItem, double ratingAvg) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.alcohol = alcohol;
        this.size = size;
        this.materials = materials;
        this.brewery = brewery;
        this.description = description;
        this.sweetness = sweetness;
        this.acidity = acidity;
        this.freshness = freshness;
        this.body = body;
        this.liquorType = liquorType;
        this.similarTraditionalLiquorItem = similarTraditionalLiquorItem;
        this.ratingAvg = ratingAvg;
    }
}