package com.osakak.jusangnakwon.domain.user.mapper;

import com.osakak.jusangnakwon.domain.user.api.response.GetUserResponse;
import com.osakak.jusangnakwon.domain.user.dto.UserResponseDto;
import org.mapstruct.Mapper;

@Mapper
public interface UserDtoMapper {

    GetUserResponse toUserResponse(UserResponseDto dto);

}
