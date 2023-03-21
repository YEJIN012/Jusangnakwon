package com.osakak.jusangnakwon.domain.user.dao;

import java.util.Optional;

import com.osakak.jusangnakwon.domain.user.entity.ERole;
import com.osakak.jusangnakwon.domain.user.entity.Role;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
