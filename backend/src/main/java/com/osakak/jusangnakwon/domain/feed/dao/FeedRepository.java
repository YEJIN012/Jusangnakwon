package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long>, FeedQueryRepository {
    List<Feed> findByIdAndLiquorType(Long id, String liquorType);

    @Query(nativeQuery = true,
            value = "select f.type AS feedType, f.date_created AS dateCreated, f.title AS title, f.content AS content, f.img AS image from feed f where f.user_id = :userId union " +
                    "select '레시피' AS feedType, h.date_created AS dateCreated, h.name AS title, h.description AS content, h.image AS image from hometender h where h.user_id = :userId " +
                    "order by dateCreated desc",
            countQuery = "select count(*) from (" +
                    "select f.id from feed f where f.user_id = :userId union " +
                    "select h.id from hometender h where h.user_id = :userId) AS record")
    Page<RecordListDto> findRecordPageByUserId(Long userId, Pageable pageable);
}
