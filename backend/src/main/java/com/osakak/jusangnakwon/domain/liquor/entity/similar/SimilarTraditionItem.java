package com.osakak.jusangnakwon.domain.liquor.entity.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Tradition;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SimilarTraditionItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, length = 30)
    private Long id;
    @Embedded
    private SimilarItemValueType similarLiquor;
    @OneToOne
    @JoinColumn(name = "tradition_id")
    private Tradition tradition;

    @Builder
    public SimilarTraditionItem(Long id, SimilarItemValueType similarLiquor, Tradition tradition) {
        this.id = id;
        this.similarLiquor = similarLiquor;
        this.tradition = tradition;
    }
}
