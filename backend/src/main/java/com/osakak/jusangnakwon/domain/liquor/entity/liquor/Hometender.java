package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarHometenderItem;
import com.osakak.jusangnakwon.domain.user.entity.User;
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
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(length = 30)
    private String name;
    @Column(name = "image", length = 100)
    private String img;

    private String materials;
    @Column(length = 30)
    private Integer salty;
    @Column(length = 30)
    private Integer sour;
    @Column(length = 30)
    private Integer bitter;
    @Column(length = 30)
    private Integer sweet;
    @Column(name = "liquor_type", columnDefinition = "VARCHAR(10) DEFAULT 'HOMETENDER'")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    @OneToOne(mappedBy = "hometender")
    private SimilarHometenderItem similarHometenderItem;

    @Column(name = "rating_avg", columnDefinition = "double default 0")
    private Double ratingAvg;

    private String description;

    @Builder
    public Hometender(Long id, User user, String name, String img, String materials, Integer salty,
            Integer sour, Integer bitter, Integer sweet, LiquorType liquorType,
            SimilarHometenderItem similarHometenderItem, Double ratingAvg, String description) {
        this.id = id;
        this.user = user;
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
        this.description = description;
    }
}
