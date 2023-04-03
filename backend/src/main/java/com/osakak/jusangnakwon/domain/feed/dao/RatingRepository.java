package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    @Query("SELECT r.liquorId FROM Rating r WHERE r.liquorType = :liquorType AND r.score >= 4.0 AND r.user.id = :userId")
    List<Long> countByLiquorTypeAndScoreAndUserId(@Param("liquorType") LiquorType liquorType, @Param("userId") Long userId);

//    @Query("select r from Rating r where r.liquorType=:type and r.liquorId=:id")


}
