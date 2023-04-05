package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Long> {

    Optional<Like> findByUserIdAndFeedId(Long id, Long feedId);
}
