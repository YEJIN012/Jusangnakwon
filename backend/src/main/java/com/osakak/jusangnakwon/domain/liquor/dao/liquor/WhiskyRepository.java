package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Whisky;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface WhiskyRepository extends JpaRepository<Whisky, Long> {
    /**
     * 전체 위스키 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 위스키 칵테일 리스트
     */
    @Query("select c from Whisky c order by c.ratingAvg desc")
    Page<Whisky> findByRatingAvg(Pageable pageable);
    @Query("select l from Whisky l where l.name like :keyword%")
    Optional<List<Whisky>> findByKeyword(@Param("keyword") String keyword);

    @Query("select w from Whisky w WHERE w.id IN :similarWhiskyUniqueList ")
    Page<Whisky> findById(Set<Long> similarWhiskyUniqueList, Pageable pageable);
}
