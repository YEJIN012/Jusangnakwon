package com.osakak.jusangnakwon.domain.feed.dto;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

@Getter
public class UserDto {

    private final Long id;
    private final String username;
    private final String profileImg;

    @Builder
    public UserDto(Long id, String username, String profileImg) {
        this.id = id;
        this.username = username;
        this.profileImg = profileImg;
    }
}
