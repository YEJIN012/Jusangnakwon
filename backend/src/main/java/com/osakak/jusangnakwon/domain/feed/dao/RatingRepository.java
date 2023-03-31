package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    @Query("SELECT r.liquorId FROM Rating r WHERE r.liquorType = :liquorType AND r.score >= 4.0 AND r.user.id = :userId")
    List<Long> countByLiquorTypeAndScoreAndUserId(@Param("liquorType") String liquorType, @Param("userId") Long userId);

}
