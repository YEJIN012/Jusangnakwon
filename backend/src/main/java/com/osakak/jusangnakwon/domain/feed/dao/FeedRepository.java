package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long>, FeedQueryRepository {
    @Query("select f from Feed f where f.liquorType=:liquorType and f.liquorId=:id")
    List<Feed> findByIdAndLiquorType(Long id, String liquorType);

}
