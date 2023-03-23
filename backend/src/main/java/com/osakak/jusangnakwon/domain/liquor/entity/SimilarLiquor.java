package com.osakak.jusangnakwon.domain.liquor.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "similar")
public class SimilarLiquor {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    @JoinColumn(name = "soju_id")
    private Soju soju;

    private Long itemId1;
    private Long itemId2;
    private Long itemId3;
    private Long itemId4;
    private Long itemId5;
}
