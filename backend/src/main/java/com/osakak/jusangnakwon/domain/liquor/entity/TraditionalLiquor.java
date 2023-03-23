package com.osakak.jusangnakwon.domain.liquor.entity;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import io.swagger.annotations.ApiModel;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@ApiModel(value = "tradition")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class TraditionalLiquor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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


}