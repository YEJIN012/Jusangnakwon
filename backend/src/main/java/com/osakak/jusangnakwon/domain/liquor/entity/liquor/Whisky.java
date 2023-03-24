package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarWhiskyItem;
import io.swagger.annotations.ApiModel;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@ApiModel(value = "whisky")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Whisky {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    private String name;
    private String img;
    private double price;
    private String link;
    private double alcohol;
    // 평점
    @Column(name = "meta_critic")
    private double metaCritic;
    private double body;
    private double sweet;
    private double sherry;
    private int malt;
    private double aperitif;
    private double smoky;
    private double pungent;
    private double fruity;
    private double honey;
    private double floral;
    private double spicy;
    private double medicinal;
    private double nutty;
    private double winey;
    @Column(name = "liquor_type")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;

    @OneToOne(mappedBy = "whisky")
    private SimilarWhiskyItem similarWhiskyItem;

    @Column(name = "rating_avg", length = 20)
    private double ratingAvg;

    @Builder
    public Whisky(Long id, String name, String img, double price, String link, double alcohol, double metaCritic, double body, double sweet, double sherry, int malt, double aperitif, double smoky, double pungent, double fruity, double honey, double floral, double spicy, double medicinal, double nutty, double winey, LiquorType liquorType, SimilarWhiskyItem similarWhiskyItem, double ratingAvg) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.link = link;
        this.alcohol = alcohol;
        this.metaCritic = metaCritic;
        this.body = body;
        this.sweet = sweet;
        this.sherry = sherry;
        this.malt = malt;
        this.aperitif = aperitif;
        this.smoky = smoky;
        this.pungent = pungent;
        this.fruity = fruity;
        this.honey = honey;
        this.floral = floral;
        this.spicy = spicy;
        this.medicinal = medicinal;
        this.nutty = nutty;
        this.winey = winey;
        this.liquorType = liquorType;
        this.similarWhiskyItem = similarWhiskyItem;
        this.ratingAvg = ratingAvg;
    }
}
