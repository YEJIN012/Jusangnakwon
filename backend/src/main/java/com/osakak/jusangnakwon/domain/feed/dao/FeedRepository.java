package com.osakak.jusangnakwon.domain.feed.dao;

import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long>, FeedQueryRepository {
    @Query("select f from Feed f where f.liquorType=:liquorType and f.liquorId=:id")
    List<Feed> findByIdAndLiquorType(Long id, String liquorType);

    @Query("select f from Feed f where f.liquorId=:id and f.liquorType=:liquorType and f.type='리뷰글'")
    List<Feed> findLiquorReviewByIdAndLiquorType(Long id, String liquorType);

    //    @Query("select f.content as content, f.img as img, f.dateCreated as dateCreated, l.ratingAvg as ratingScore from Feed f " +
//            "left join fetch Beer l " +
//            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
//            "where l.id=:id and f.type='리뷰글'")
//    List<ReviewListDto> findBeerReviewByLiquorId(Long id);
    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.ReviewItemDto(f.dateCreated, f.content, f.img) " +
            "from Feed f " +
            "left join fetch Beer l " +
            "on f.liquorId = l.id and f.liquorType=l.liquorType " +
            "where l.id=:id and f.type='리뷰글'")
    List<ReviewItemDto> findBeerReviewByLiquorId(Long id);

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
}
