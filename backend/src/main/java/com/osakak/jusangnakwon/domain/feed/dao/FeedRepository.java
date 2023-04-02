package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long>, FeedQueryRepository {
    @Query("select f from Feed f where f.liquorType=:liquorType and f.liquorId=:id")
    List<Feed> findByIdAndLiquorType(Long id, String liquorType);

    //    @Query("select f.content as content, f.img as img, f.dateCreated as dateCreated, l.ratingAvg as ratingScore from Feed f " +
//            "left join fetch Beer l " +
//            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
//            "where l.id=:id and f.type='리뷰글'")
//    List<ReviewListDto> findBeerReviewByLiquorId(Long id);
    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto(r.score, f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Rating r " +
            "on f.user.id = r.user.id and r.liquorId=f.liquorId " +
            "left join fetch Beer b " +
            "on f.liquorId = b.id " +
            "where f.liquorId=:id and f.type='리뷰글'")
    List<ReviewListDto> findBeerReviewByLiquorId(Long id);

    @Query("select f.content, f.img, f.dateCreated, l.ratingAvg from Feed f " +
            "left join fetch Wine l " +
            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
            "where l.id=:id")
    List<ReviewListDto> findWineReviewByLiquorId(Long id);

    @Query("select f.content, f.img, f.dateCreated, l.ratingAvg from Feed f " +
            "left join fetch Cocktail l " +
            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
            "where l.id=:id")
    List<ReviewListDto> findCocktailReviewByLiquorId(Long id);

    @Query("select f.content, f.img, f.dateCreated, l.ratingAvg from Feed f " +
            "left join fetch Tradition l " +
            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
            "where l.id=:id")
    List<ReviewListDto> findTraditionReviewByLiquorId(Long id);

    @Query("select f.content, f.img, f.dateCreated, l.ratingAvg from Feed f " +
            "left join fetch Hometender l " +
            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
            "where l.id=:id")
    List<ReviewListDto> findHometenderReviewByLiquorId(Long id);

    @Query("select f.content, f.img, f.dateCreated, l.ratingAvg from Feed f " +
            "left join fetch Whisky l " +
            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
            "where l.id=:id")
    List<ReviewListDto> findWhiskyReviewByLiquorId(Long id);

    @Query(nativeQuery = true,
            value = "select f.type AS feedType, f.date_created AS dateCreated, f.title AS title, f.content AS content, f.img AS image from feed f where f.user_id = :userId union " +
                    "select '레시피' AS feedType, h.date_created AS dateCreated, h.name AS title, h.description AS content, h.image AS image from hometender h where h.user_id = :userId " +
                    "order by dateCreated desc",
            countQuery = "select count(*) from (" +
                    "select f.id from feed f where f.user_id = :userId union " +
                    "select h.id from hometender h where h.user_id = :userId) AS record")
    Page<RecordListDto> findRecordPageByUserId(Long userId, Pageable pageable);

}
