package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Scrap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    @Query("select s from Scrap s where s.liquorName=:name and s.liquorType=:type")
    Long getScrapCntByNameAndLiquorType(String name, String type);

}
