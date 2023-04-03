package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface WineRepository extends JpaRepository<Wine, Long>,WineQueryRepository {
    /**
     * 전체 와인 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 와인 리스트
     */
    @Query("select w from Wine w order by w.ratingAvg desc")
    Page<Wine> findByRatingAvg(Pageable pageable);

    @Query("select l from Wine l where l.name like :keyword%")
    Optional<List<Wine>> findByKeyword(@Param("keyword") String keyword);

    @Query("select w from Wine w WHERE w.id IN :similarWineUniqueList ")
    Page<Wine> findById(Set<Long> similarWineUniqueList, Pageable pageable);
}
