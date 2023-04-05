package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Cocktail;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Whisky;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface CocktailRepository extends JpaRepository<Cocktail, Long>,CocktailQueryRepository {
    /**
     * 전체 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 칵테일 리스트
     */
    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(l.id, l.name, l.img, l.liquorType) " +
            "from Cocktail l " +
            "order by l.ratingAvg desc, l.name")
    Page<LiquorListItemDto> findListByRatingIsNotLoggedIn(Pageable pageable);

    @Query("select l from Cocktail l where l.name like :keyword%")
    Optional<List<Cocktail>> findByKeyword(@Param("keyword") String keyword);

    @Query("select w from Cocktail w WHERE w.id IN :similarCocktailUniqueList ")
    Page<Cocktail> findById(Set<Long> similarCocktailUniqueList, Pageable pageable);

    @Query("select l from  Cocktail l where l.id in (:id)")
    List<Cocktail> findByIdList(@Param("id")List<Long> id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(l.id, l.name, l.img, l.liquorType, s.scrapped) " +
            "from Cocktail l " +
            "left join fetch Scrap s " +
            "on l.liquorType=s.liquorType and l.id=s.liquorId " +
            "left join fetch User u " +
            "on u.id=s.user.id " +
            "order by l.ratingAvg desc, l.name ")
    Page<LiquorListItemDto> findListByRatingIsLogin(Pageable pageable);
}

