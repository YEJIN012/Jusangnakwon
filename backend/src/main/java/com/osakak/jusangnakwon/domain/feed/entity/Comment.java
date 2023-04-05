package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed;

    @Column(columnDefinition = "TEXT")
    private String content;

    @CreationTimestamp
    @Column(name = "date_created")
    private LocalDateTime dateCreated;

    @Builder
    public Comment(Long id, User user, Feed feed, String content, LocalDateTime dateCreated) {
        this.id = id;
        this.user = user;
        this.feed = feed;
        this.content = content;
        this.dateCreated = dateCreated;
    }
}
