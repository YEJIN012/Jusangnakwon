package com.osakak.jusangnakwon.domain.user.dao;

import java.util.Optional;

import com.osakak.jusangnakwon.domain.user.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
