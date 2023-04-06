package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Cocktail;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Tradition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface TraditionRepository extends JpaRepository<Tradition, Long>, TraditionQueryRepository {
    /**
     * 전체 전통주 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 전통주 칵테일 리스트
     */
    @Query("select c from Tradition c order by c.ratingAvg desc")
    Page<Tradition> findByRatingAvg(Pageable pageable);

    @Query("select l from Tradition l where l.name like :keyword%")
    Optional<List<Tradition>> findByKeyword(@Param("keyword") String keyword);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(w.id,w.name,w.img,w.liquorType,s.scrapped) from Tradition w left join Scrap s on s.liquorId = w.id and w.liquorType = s.liquorType and s.user.id = :userId WHERE w.id IN :similarTraditionUniqueList ")
    Page<LiquorListItemDto> findById(Set<Long> similarTraditionUniqueList, Pageable pageable, @Param("userId") Long userId);

    @Query("select l from  Tradition l where l.id in (:id)")
    List<Tradition> findByIdList(@Param("id") List<Long> id);
}

