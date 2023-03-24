package com.osakak.jusangnakwon.domain.liquor.entity.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SimilarBeerItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, length = 30)
    private Long id;
    @Embedded
    private SimilarItemValueType similarLiquor;

    @OneToOne
    @JoinColumn(name = "beer_id")
    private Beer beer;

    @Builder
    public SimilarBeerItem(Long id, SimilarItemValueType similarLiquor, Beer beer) {
        this.id = id;
        this.similarLiquor = similarLiquor;
        this.beer = beer;
    }
}
