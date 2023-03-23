package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarWhiskyItem;
import io.swagger.annotations.ApiModel;
import lombok.AccessLevel;
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
    private LiquorType liquorType;

    @OneToOne(mappedBy = "whisky")
    private SimilarWhiskyItem similarWhiskyItem;

}
