package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.CalendarDto;
import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long>, FeedQueryRepository {

    @Query(nativeQuery = true,
            value = "select f.id AS id, f.type AS feedType, f.date_created AS dateCreated, f.title AS title, f.content AS content, f.img AS image from feed f where f.user_id = :userId union "
                    + "select h.id AS id, '레시피' AS feedType, h.date_created AS dateCreated, h.name AS title, h.description AS content, h.image AS image from hometender h where h.user_id = :userId "
                    + "order by dateCreated desc",
            countQuery = "select count(*) from ("
                    + "select f.id from feed f where f.user_id = :userId union "
                    + "select h.id from hometender h where h.user_id = :userId) AS record")
    Page<RecordListDto> findRecordPageByUserId(Long userId, Pageable pageable);

    @Query(nativeQuery = true,
            value = "SELECT date, MIN(liquorType) AS liquorType FROM("
                    + "SELECT DATE(f1.date_created) AS date, f1.liquor_type AS liquorType, COUNT(*) AS reviewCount "
                    + "FROM feed f1 WHERE f1.type='리뷰글' and f1.user_id = :userId "
                    + "GROUP BY date, liquorType HAVING reviewCount = (SELECT MAX(c) FROM ("
                    + "SELECT DATE(f2.date_created) AS d1, f2.liquor_type AS l1, COUNT(*) AS c "
                    + "FROM feed f2 WHERE f2.type='리뷰글' and f2.user_id = :userId GROUP BY d1, l1 "
                    + ") AS review_counts WHERE review_counts.d1 = date) "
                    + "ORDER BY date, liquorType) AS liq "
                    + "WHERE date > LAST_DAY(:date - interval 1 month) AND date <= LAST_DAY(:date) "
                    + "GROUP BY date;")
    List<CalendarDto> findCalendarByUserIdAndDate(Long userId, LocalDate date);

    //    @Query("select f.content as content, f.img as img, f.dateCreated as dateCreated, l.ratingAvg as ratingScore from Feed f " +
//            "left join fetch Beer l " +
//            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
//            "where l.id=:id and f.type='리뷰글'
//            order by f.dateCreated desc ")
//    List<ReviewListDto> findBeerReviewByLiquorId(Long id);
    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto( f.id, r.score, f.dateCreated, f.content, f.img) "
            +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.rating.id = r.id " +
            "left join fetch Beer b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글' and f.liquorType='BEER' " +
            "order by f.dateCreated desc ")
    List<ReviewListDto> findBeerReviewByLiquorId(@Param("id") Long id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto(f.id, r.score, f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.rating.id = r.id " +
            "left join fetch Wine b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글' and f.liquorType='WINE'" +
            "order by f.dateCreated desc ")
    List<ReviewListDto> findWineReviewByLiquorId(@Param("id") Long id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto(f.id, r.score, f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.rating.id = r.id " +
            "left join fetch Cocktail b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글' and f.liquorType='COCKTAIL'" +
            "order by f.dateCreated desc ")
    List<ReviewListDto> findCocktailReviewByLiquorId(@Param("id") Long id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto(f.id, r.score, f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.rating.id = r.id " +
            "left join fetch Tradition b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글' and f.liquorType='TRADITION'" +
            "order by f.dateCreated desc ")
    List<ReviewListDto> findTraditionReviewByLiquorId(@Param("id") Long id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto(f.id, r.score, f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.rating.id = r.id " +
            "left join fetch Hometender b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글' and f.liquorType='HOMETENDER'" +
            "order by f.dateCreated desc ")
    List<ReviewListDto> findHometenderReviewByLiquorId(@Param("id") Long id);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto(f.id, r.score, f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.rating.id = r.id " +
            "left join fetch Whisky b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글' and f.liquorType='WHISKY'" +
            "order by f.dateCreated desc ")
    List<ReviewListDto> findWhiskyReviewByLiquorId(@Param("id") Long id);

    @Modifying
    @Query("update Beer b set b.ratingAvg = "
            + "(select avg(r.score) from Rating r where r.liquorId = :id "
            + "and r.liquorType = 'BEER') "
            + "where b.id = :id")
    int updateBeerRatingAvgByLiquorId(Long id);

    @Modifying
    @Query("update Cocktail c set c.ratingAvg = "
            + "(select avg(r.score) from Rating r where r.liquorId = :id "
            + "and r.liquorType = 'COCKTAIL') "
            + "where c.id = :id")
    int updateCocktailRatingAvgByLiquorId(Long id);

    @Modifying
    @Query("update Hometender h set h.ratingAvg = "
            + "(select avg(r.score) from Rating r where r.liquorId = :id "
            + "and r.liquorType = 'HOMETENDER') "
            + "where h.id = :id")
    int updateHometenderRatingAvgByLiquorId(Long id);

    @Modifying
    @Query("update Tradition t set t.ratingAvg = "
            + "(select avg(r.score) from Rating r where r.liquorId = :id "
            + "and r.liquorType = 'TRADITION') "
            + "where t.id = :id")
    int updateTraditionRatingAvgByLiquorId(Long id);

    @Modifying
    @Query("update Wine w set w.ratingAvg = "
            + "(select avg(r.score) from Rating r where r.liquorId = :id "
            + "and r.liquorType = 'WINE') "
            + "where w.id = :id")
    int updateWineRatingAvgByLiquorId(Long id);

    @Modifying
    @Query("update Whisky w set w.ratingAvg = "
            + "(select avg(r.score) from Rating r where r.liquorId = :id "
            + "and r.liquorType = 'WHISKY') "
            + "where w.id = :id")
    int updateWhiskyRatingAvgByLiquorId(Long id);
}
