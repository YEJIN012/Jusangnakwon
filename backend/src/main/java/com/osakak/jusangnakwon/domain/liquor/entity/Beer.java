package com.osakak.jusangnakwon.domain.liquor.entity;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Beer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    @Column(length = 40, nullable = false)
    private String name;
    @Column(length = 200, nullable = false)
    private String img;
    @Column(length = 100, nullable = false)
    private String type;
    @Column(length = 100, nullable = false)
    private String country;
    @Column(nullable = false)
    private String description;
    @Column(length = 10, nullable = false)
    private Double aroma;
    @Column(length = 10, nullable = false)
    private Double appearance;
    @Column(length = 10, nullable = false)
    private Double flavor;
    @Column(length = 10, nullable = false)
    private Double mouthfeel;
    @Column(name = "liquor_type", length = 10, nullable = false)
    private LiquorType liquorType;
}
