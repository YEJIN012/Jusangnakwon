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

public interface TraditionRepository extends JpaRepository<Tradition, Long>,TraditionQueryRepository {
    /**
     * 전체 전통주 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 전통주 칵테일 리스트
     */
    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(l.id, l.name, l.img, l.liquorType) " +
            "from Tradition l " +
            "order by l.ratingAvg desc, l.name ")
    Page<LiquorListItemDto> findListByRatingIsNotLoggedIn(Pageable pageable);

    @Query("select l from Tradition l where l.name like :keyword%")
    Optional<List<Tradition>> findByKeyword(@Param("keyword") String keyword);

    @Query("select w from Tradition w WHERE w.id IN :similarTraditionUniqueList ")
    Page<Tradition> findById(Set<Long> similarTraditionUniqueList, Pageable pageable);

    @Query("select l from  Tradition l where l.id in (:id)")
    List<Tradition> findByIdList(@Param("id")List<Long> id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(l.id, l.name, l.img, l.liquorType, s.scrapped) " +
            "from Tradition l " +
            "left join fetch Scrap s " +
            "on l.liquorType=s.liquorType and l.id=s.liquorId " +
            "left join fetch User u " +
            "on u.id=s.user.id " +
            "order by l.ratingAvg desc, l.name ")
    Page<LiquorListItemDto> findListByRatingIsLogin(Pageable pageable);
}

