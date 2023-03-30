package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface FeedRepository extends JpaRepository<Feed, Long>, FeedQueryRepository {

}
