package com.osakak.jusangnakwon.domain.user.application;

import com.osakak.jusangnakwon.common.errors.UserNotFoundException;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.dto.UserResponseDto;
import com.osakak.jusangnakwon.domain.user.entity.User;
import com.osakak.jusangnakwon.domain.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    public User getUser(String userId) {
        return userRepository.findByUserId(userId);
    }

    /**
     * user entity를 dto로 반환
     *
     * @param userId
     * @return userDto
     */
    public UserResponseDto getUserInfo(String userId) {
        User user = findUser(userId);
        return userMapper.toDto(user);
    }

    /**
     * 유저ID를 이용해 유저 Entity를 반환
     *
     * @param userId
     * @return user entity
     */
    private User findUser(String userId) {
        return userRepository.findByUserId(userId);
    }
}

