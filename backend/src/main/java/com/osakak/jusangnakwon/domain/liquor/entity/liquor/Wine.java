package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarWineItem;
import io.swagger.annotations.ApiModel;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@ApiModel(value = "wine")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Wine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    @Column(length = 40, nullable = false)
    private String name;
    @Column(length = 200, nullable = false)
    private String img;
    @Column(length = 10, nullable = false)
    private int price;
    @Column(length = 200, nullable = false)
    private String link;
    @Column(length = 10, nullable = false)
    private double alcohol;
    @Column(length = 30, nullable = false)
    private String type;
    @Column(length = 30, nullable = false)
    private String country;
    @Column(length = 30, nullable = false)
    private String winery;
    @Column(length = 30, nullable = false)
    private String province;
    @Column(name = "grape_type", length = 30)
    private String grapeType;
    @Column(name = "food_pairing", length = 100)
    private String foodPairing;
    @Column(length = 30, nullable = false)
    private String vintage;
    @Column(length = 10, nullable = false)
    private int size;
    @Column(nullable = false)
    private String description;
    @Column(length = 10, nullable = false)
    private int sweetness;
    @Column(length = 10, nullable = false)
    private int acidity;
    @Column(length = 10, nullable = false)
    private int body;
    @Column(length = 10, nullable = false)
    private int tannin;
    @Column(name = "liquor_type", length = 10)
    private LiquorType liquorType;

    @OneToOne(mappedBy = "wine")
    private SimilarWineItem similarWineItem;

}
