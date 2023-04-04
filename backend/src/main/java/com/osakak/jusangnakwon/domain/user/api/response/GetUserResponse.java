package com.osakak.jusangnakwon.domain.user.api.response;

import com.osakak.jusangnakwon.common.oauth.entity.ProviderType;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class GetUserResponse {
    private Long id;
    private String username;
    private ProviderType providerType;
    private String email;
    private Timestamp dateRegisted;
    private String profileImageUrl;
    private Byte survey;

    @Builder
    public GetUserResponse(Long id, String username, ProviderType providerType, String email, Timestamp dateRegisted, String profileImageUrl, Byte survey) {
        this.id = id;
        this.username = username;
        this.providerType = providerType;
        this.email = email;
        this.dateRegisted = dateRegisted;
        this.profileImageUrl = profileImageUrl;
        this.survey = survey;
    }
}