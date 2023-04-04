package com.osakak.jusangnakwon.domain.user.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@ToString
@Getter
@NoArgsConstructor
@Table(name = "survey")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(nullable = false)
    private int sweetness;

    @Column(nullable = false)
    private int bitter;

    @Column(nullable = false)
    private int sour;

    @Column(nullable = false)
    private int body;

    @Column(nullable = false)
    private int aroma;

    @Builder
    public Survey(Long userId, int sweetness, int bitter, int sour, int body, int aroma) {
        this.userId = userId;
        this.sweetness = sweetness;
        this.bitter = bitter;
        this.sour = sour;
        this.body = body;
        this.aroma = aroma;
    }
}
