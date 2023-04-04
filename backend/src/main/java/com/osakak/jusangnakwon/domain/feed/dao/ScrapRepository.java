package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Scrap;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    @Query("select s from Scrap s where s.liquorName=:name and s.liquorType=:type")
    Long getScrapCntByNameAndLiquorType(String name, String type);

    @Query("select s from Scrap s where s.liquorId=:liquorId and s.user.id=:userId and s.liquorType=:liquorType")
    Optional<Scrap> isUserScrapped(Long liquorId, Long userId, LiquorType liquorType);

}
