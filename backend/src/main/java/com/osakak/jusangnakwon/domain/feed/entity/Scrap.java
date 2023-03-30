package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.user.entity.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Scrap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, name = "liquor_type", length = 10)
    private String liquorType;

    @Column(nullable = false, name = "liquor_name", length = 150)
    private String liquorName;

    @Builder
    public Scrap(Long id, User user, String liquorType, String liquorName) {
        this.id = id;
        this.user = user;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
    }
}
