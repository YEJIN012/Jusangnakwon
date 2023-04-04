package com.osakak.jusangnakwon.domain.user.dto;

import com.osakak.jusangnakwon.common.oauth.entity.ProviderType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@AllArgsConstructor
@Builder
@Getter
public class UserResponseDto {
    private Long id;
    private String username;
    private ProviderType providerType;
    private String email;
    private Timestamp dateRegisted;
    private String profileImageUrl;
    private Byte survey;
}
