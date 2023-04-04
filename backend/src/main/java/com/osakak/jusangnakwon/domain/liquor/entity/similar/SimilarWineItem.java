package com.osakak.jusangnakwon.domain.liquor.entity.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class SimilarWineItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, length = 30)
    private Long id;
    @Embedded
    private SimilarItemValueType similarLiquor;
    @OneToOne
    @JoinColumn(name = "wine_id")
    private Wine wine;

    @Builder
    public SimilarWineItem(Long id, SimilarItemValueType similarLiquor, Wine wine) {
        this.id = id;
        this.similarLiquor = similarLiquor;
        this.wine = wine;
    }
}
