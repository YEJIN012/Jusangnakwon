package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Schema(description = "beer")
public class Beer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    @Schema(description = "id")
    private Long id;
    @Column(length = 40, nullable = false)
    private String name;
    @Column(length = 200)
    private String img;
    @Column(length = 100)
    private String type;
    @Column(length = 100)
    private String country;
    private String description;
    @Column(length = 10)
    private Double aroma;
    @Column(length = 10)
    private Double appearance;
    @Column(length = 10)
    private Double flavor;
    @Column(length = 10)
    private Double mouthfeel;
    @Column(name = "liquor_type", columnDefinition = "VARCHAR(10) DEFAULT 'BEER'")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    @OneToOne(mappedBy = "beer")
    private SimilarBeerItem similarBeerItem;
    @Column(name = "rating_avg", columnDefinition = "double DEFAULT 0")
    private double ratingAvg;

    @Builder
    public Beer(Long id, String name, String img, String type, String country, String description, Double aroma, Double appearance, Double flavor, Double mouthfeel, LiquorType liquorType, SimilarBeerItem similarBeerItem, double ratingAvg) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.country = country;
        this.description = description;
        this.aroma = aroma;
        this.appearance = appearance;
        this.flavor = flavor;
        this.mouthfeel = mouthfeel;
        this.liquorType = liquorType;
        this.similarBeerItem = similarBeerItem;
        this.ratingAvg = ratingAvg;
    }
}
