package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Scrap;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    @Query("SELECT COUNT(s) from Scrap s WHERE s.liquorName=:liquorName and s.liquorType=:liquorType")
    Long findByLiquorNameAndLiquorType(String liquorName, LiquorType liquorType);

    @Query("select s from Scrap s where s.user.id=:id and s.liquorName=:name")
    Optional<Scrap> findByLiquorId(Long id, String name);


}
