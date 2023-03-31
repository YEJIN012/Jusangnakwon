package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.user.entity.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Feed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, length = 20)
    private String type;

    private String img;

    @Column(length = 150)
    private String title;

    @Column(name = "liquor_id")
    private Long liquorId;

    @Column(name = "liquor_type")
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;

    @Column(name = "liquor_name", length = 150)
    private String liquorName;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    @Column(name = "is_public", nullable = false)
    private Boolean isPublic;

    @Column(name = "date_created", nullable = false)
    private LocalDateTime dateCreated;

    @OneToMany(mappedBy = "feed", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Feed(Long id, User user, String type, String img, String title, Long liquorId,
            LiquorType liquorType, String liquorName, String content, Boolean isPublic,
            LocalDateTime dateCreated, List<Comment> comments) {
        this.id = id;
        this.user = user;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorId = liquorId;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.content = content;
        this.isPublic = isPublic;
        this.dateCreated = dateCreated;
        this.comments = comments;
    }
}
