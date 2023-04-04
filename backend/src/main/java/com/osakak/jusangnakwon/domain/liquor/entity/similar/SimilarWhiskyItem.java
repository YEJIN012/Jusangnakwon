package com.osakak.jusangnakwon.domain.liquor.entity.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Whisky;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SimilarWhiskyItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, length = 30)
    private Long id;
    @Embedded
    private SimilarItemValueType similarLiquor;
    @OneToOne
    @JoinColumn(name = "whisky_id")
    private Whisky whisky;

    @Builder
    public SimilarWhiskyItem(Long id, SimilarItemValueType similarLiquor, Whisky whisky) {
        this.id = id;
        this.similarLiquor = similarLiquor;
        this.whisky = whisky;
    }
}
