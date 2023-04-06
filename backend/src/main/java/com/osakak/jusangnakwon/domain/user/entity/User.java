package com.osakak.jusangnakwon.domain.user.entity;

import com.osakak.jusangnakwon.common.oauth.entity.ProviderType;
import com.osakak.jusangnakwon.common.oauth.entity.RoleType;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@ToString
@Getter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "oauth_id", nullable = false, length = 64, unique = true)
    private String userId;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "is_deleted", nullable = false)
    private boolean isDeleted;

    @Enumerated(EnumType.STRING)
    @Column(name = "provider", nullable = false, length = 10)
    private ProviderType providerType;

    @Column(name = "email", length = 50)
    private String email;

    @CreationTimestamp
    @Column(name = "date_registered")
    private Timestamp dateRegisted;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false, length = 50)
    private RoleType role;

    @Column(name = "profile_img", nullable = false, length = 512)
    private String profileImageUrl;

    @Column(name = "survey", nullable = false)
    private Byte survey;

    @Builder
    @QueryProjection
    public User(Long id, String userId, String username, boolean isDeleted, ProviderType providerType, String email, Timestamp dateRegisted, RoleType role, String profileImageUrl, Byte survey) {
        this.id = id;
        this.userId = userId;
        this.username = username;
        this.isDeleted = isDeleted;
        this.providerType = providerType;
        this.email = email;
        this.dateRegisted = dateRegisted;
        this.role = role;
        this.profileImageUrl = profileImageUrl;
        this.survey = survey;
    }

    public User(Long id, String userId) {
        this.id = id;
        this.userId = userId;
    }


    public void completeSurvey(Byte complete) {
        this.survey = complete;
    }
}