package com.osakak.jusangnakwon.common.oauth.service;

import com.osakak.jusangnakwon.common.oauth.entity.ProviderType;
import com.osakak.jusangnakwon.common.oauth.entity.RoleType;
import com.osakak.jusangnakwon.common.oauth.entity.UserPrincipal;
import com.osakak.jusangnakwon.common.oauth.exception.OAuthProviderMissMatchException;
import com.osakak.jusangnakwon.common.oauth.info.OAuth2UserInfo;
import com.osakak.jusangnakwon.common.oauth.info.OAuth2UserInfoFactory;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);

        try {
            return this.process(userRequest, user);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User process(OAuth2UserRequest userRequest, OAuth2User user) {
        ProviderType providerType = ProviderType.valueOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());

        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(providerType, user.getAttributes());
        Optional<User> savedUser = userRepository.findById(userInfo.getId());

        if (savedUser.isPresent()) {
            if (providerType != savedUser.get().getProviderType()) {
                throw new OAuthProviderMissMatchException(
                        "Looks like you're signed up with " + providerType +
                                " account. Please use your " + savedUser.get().getProviderType() + " account to login."
                );
            }
        } else {
            User user1 = savedUser.get();
            user1 = createUser(userInfo, providerType);
        }

        return UserPrincipal.create(savedUser.get(), user.getAttributes());
    }

    private User createUser(OAuth2UserInfo userInfo, ProviderType providerType) {
        User user = User.builder()
                .id(userInfo.getId())
                .username(userInfo.getName())
                .email(userInfo.getEmail())
                .password(UUID.randomUUID().toString())
                .role(RoleType.USER)
                .providerType(providerType)
                .profileImageUrl(userInfo.getImageUrl())
                .build();

        return userRepository.save(user);
    }

}
