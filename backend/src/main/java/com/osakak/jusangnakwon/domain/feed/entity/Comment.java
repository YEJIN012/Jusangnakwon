package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.user.entity.User;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

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

    @CreatedDate
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
