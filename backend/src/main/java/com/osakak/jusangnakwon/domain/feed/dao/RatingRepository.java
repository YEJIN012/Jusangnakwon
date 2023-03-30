package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface RatingRepository extends JpaRepository<Rating, Long> {


}
