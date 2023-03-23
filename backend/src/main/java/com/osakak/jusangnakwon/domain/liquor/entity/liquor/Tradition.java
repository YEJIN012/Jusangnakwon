package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarTraditionItem;
import lombok.AccessLevel;
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
    private String name;
    private String price;
    private String img;
    private double alcohol;
    private String size;
    private String materials;
    private String brewery;
    private String description;
    private double sweeetness;
    private double acidity;
    private double freshness;
    private int body;
    @Column(name = "liquor_type")
    private LiquorType liquorType;
    @OneToOne(mappedBy = "tradition")
    private SimilarTraditionItem similarTraditionalLiquorItem;


}