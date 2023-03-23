package com.osakak.jusangnakwon.domain.user.entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.osakak.jusangnakwon.common.oauth.entity.ProviderType;
import com.osakak.jusangnakwon.common.oauth.entity.RoleType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.Id;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "USER_ID", nullable = false, length = 64, unique = true)
    private String userId;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "is_deleted", nullable = false)
    private boolean isDeleted;

    @Column(name = "provider", nullable = false, length = 10)
    private ProviderType providerType;

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @CreationTimestamp
    @Column(name = "date_registered")
    private Timestamp dateRegisted;

    @Column(name = "role", nullable = false, length = 50)
    private RoleType role;

    @Column(name = "role", nullable = false, length = 512)
    private String profileImageUrl;

    @Builder
    public User(String userId, String username, boolean isDeleted, ProviderType providerType, String email, Timestamp dateRegisted, RoleType role, String profileImageUrl) {
        this.userId = userId;
        this.username = username;
        this.isDeleted = isDeleted;
        this.providerType = providerType;
        this.email = email;
        this.dateRegisted = dateRegisted;
        this.role = role;
        this.profileImageUrl = profileImageUrl;
    }

    public User() {

    }
}