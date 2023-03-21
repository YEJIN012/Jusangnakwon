package com.osakak.jusangnakwon.common.oauth.info;

import com.osakak.jusangnakwon.common.oauth.entity.ProviderType;
import com.osakak.jusangnakwon.common.oauth.info.impl.GoogleOAuth2UserInfo;
import com.osakak.jusangnakwon.common.oauth.info.impl.KakaoOAuth2UserInfo;

import java.util.Map;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(ProviderType providerType, Map<String, Object> attributes) {
        switch (providerType) {
            case GOOGLE: return new GoogleOAuth2UserInfo(attributes);
            case KAKAO: return new KakaoOAuth2UserInfo(attributes);
            default: throw new IllegalArgumentException("Invalid Provider Type.");
        }
    }
}
