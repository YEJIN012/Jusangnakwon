package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.common.errors.LiquorNotFoundException;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dao.ScrapRepository;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.dao.similar.SimilarBeerItemRepository;
import com.osakak.jusangnakwon.domain.liquor.dao.similar.SimilarWineItemRepository;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LiquorDetailService {
    private final BeerRepository beerRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final WhiskyRepository whiskyRepository;
    private final WineRepository wineRepository;
    private final FeedRepository feedRepository;
    private final ScrapRepository scrapRepository;
    private final LiquorMapper liquorMapper;
    private final SimilarBeerItemRepository similarBeerItemRepository;
    private final SimilarWineItemRepository similarWineItemRepository;

    /**
     * - 평점
     * - 술 이름 술
     * - 스크랩 개수 -scrap에서 조회
     * - 상세 설명 (description) 술
     * - 연관된 리뷰 (페이징) feed -
     * - 맛 태그?
     * - 비슷한 술 술-similar
     * - 술 이미지 술
     *
     * @param type 술 타입
     * @param id   술 id
     * @return 술 상세 정보
     */
    public LiquorDetailResponse getLiquorDetail(LiquorType type, Long id) {
        Long liquorId = null;
        String name = null;
        String image = null;
        Double ratingAvg = null;
        Long scrapCnt = null;
        boolean scrapped = false;
        List<String> ingredients = null;
        List<String> tastes = null;
        String description = null;
        List<ReviewItemDto> reviews = null;
        List<LiquorListItemDto> similarItem = null;

        List<Long> list = new ArrayList<>();
        switch (type) {
            case BEER:
                Optional<Beer> byIdBeer = beerRepository.findById(id);
                if (byIdBeer.isEmpty())
                    throw new LiquorNotFoundException();
                Beer beer = byIdBeer.get();
                Optional<SimilarBeerItem> byId = similarBeerItemRepository.findById(id);
                if (byId.isPresent()) {
                    SimilarBeerItem similarBeerItem = byId.get();
                    extracted(list, similarBeerItem.getSimilarLiquor());
                    List<Beer> byIdList = beerRepository.findByIdList(list);

                    liquorId = id;
                    name = beer.getName();
                    ratingAvg = beer.getRatingAvg();
//                    ratingAvg = ra

                    reviews = feedRepository.findBeerReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoBeer(byIdList);
                    description = beer.getDescription();
                    image = beer.getImg();
                }
                break;
            case WINE:
                break;
            case WHISKY:
                break;
            case COCKTAIL:
                break;
            case TRADITION:
                break;
            case HOMETENDER:
                break;
        }
        return LiquorDetailResponse.builder()
                .id(liquorId)
                .name(name)
                .image(image)
                .ratingAvg(ratingAvg)
                .scrapCnt(scrapCnt)
                .scrapped(scrapped)
                .tastes(null)
                .description(description)
                .reviews(reviews)
                .similarItems(similarItem)
                .build();
    }

    private static void extracted(List<Long> list, SimilarItemValueType similarBeerItem) {
        list.add(similarBeerItem.getItem1());
        list.add(similarBeerItem.getItem2());
        list.add(similarBeerItem.getItem3());
        list.add(similarBeerItem.getItem4());
        list.add(similarBeerItem.getItem5());
    }
}
