package com.osakak.jusangnakwon.domain.liquor.dao;

import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineRepository extends MongoRepository<Wine, String> {

}
