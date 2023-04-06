package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, name = "liquor_id")
    private Long liquorId;

    @Column(nullable = false, name = "liquor_type")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;

    @Column(nullable = false, name = "liquor_name", length = 150)
    private String liquorName;

    @Column(nullable = false)
    private Double score;

    @Builder
    public Rating(Long id, User user, Long liquorId, LiquorType liquorType, String liquorName,
                  Double score) {
        this.id = id;
        this.user = user;
        this.liquorId = liquorId;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.score = score;
    }
}
