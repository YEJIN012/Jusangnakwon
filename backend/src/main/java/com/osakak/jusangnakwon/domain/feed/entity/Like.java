package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "likes")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed;

    @Column(name = "is_liked", nullable = false)
    private Boolean isLiked;

    @Builder
    public Like(Long id, User user, Feed feed, Boolean isLiked) {
        this.id = id;
        this.user = user;
        this.feed = feed;
        this.isLiked = isLiked;
    }

    public void setLiked(Boolean liked) {
        isLiked = liked;
    }
}
