package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.common.errors.LiquorNotFoundException;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dao.ScrapRepository;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.feed.entity.Scrap;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.*;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LiquorDetailService {
    private final BeerRepository beerRepository;
    private final SimilarBeerRepository similarBeerRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final WhiskyRepository whiskyRepository;
    private final WineRepository wineRepository;
    private final FeedRepository feedRepository;
    private final ScrapRepository scrapRepository;
    private final LiquorMapper liquorMapper;

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
        int scrap = 0;
        String description = null;
        List<Feed> feeds = null;
        List<String> tastes = null;
        List<LiquorListItemDto> similarItem = null;
        String image = null;
        switch (type) {
            case BEER:
                Optional<Beer> byIdBeer = beerRepository.findById(id);
                if (byIdBeer.isEmpty())
                    throw new LiquorNotFoundException();
                Beer beer = byIdBeer.get();
                Optional<SimilarBeerItem> byId = similarBeerRepository.findById(id);
                if (byId.isPresent()) {
                    SimilarBeerItem similarBeerItem = byId.get();
                    List<Long> list = new ArrayList<>();
                    list.add(similarBeerItem.getSimilarLiquor().getItem1());
                    list.add(similarBeerItem.getSimilarLiquor().getItem2());
                    list.add(similarBeerItem.getSimilarLiquor().getItem3());
                    list.add(similarBeerItem.getSimilarLiquor().getItem4());
                    list.add(similarBeerItem.getSimilarLiquor().getItem5());
                    List<Beer> byIdList = beerRepository.findByIdList(list);

                    liquorId = id;
                    name = beer.getName();
                    scrap = scrapRepository.findByLiquorNameAndLiquorType(beer.getName(), String.valueOf(beer.getLiquorType()));
                    feeds = feedRepository.findByIdAndLiquorType(id, String.valueOf(type));
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
                .similarItem(similarItem)
                .description(description)
                .feeds(feeds)
                .id(liquorId)
                .image(image)
                .name(name)
                .scrap(scrap)
                .tastes(null)
                .build();
    }
}
