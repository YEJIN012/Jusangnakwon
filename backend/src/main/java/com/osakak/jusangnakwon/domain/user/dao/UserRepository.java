package com.osakak.jusangnakwon.domain.user.dao;

import com.osakak.jusangnakwon.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByUserId(String userId);
}

