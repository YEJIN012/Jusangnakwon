package com.osakak.jusangnakwon.domain.user.mapper;

import com.osakak.jusangnakwon.domain.user.dto.UserResponseDto;
import com.osakak.jusangnakwon.domain.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserResponseDto toDto(User user);
}
