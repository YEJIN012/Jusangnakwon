package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.*;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Beer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        switch (type) {
            case BEER:
                Optional<Beer> byId = beerRepository.findById(id);
                if (byId.isPresent()) {
                    Beer beer = byId.get();
                }
                List<Feed> feeds = feedRepository.findByIdAndLiquorType(id, String.valueOf(type));

                return null;
            case WINE:
                return null;
            case WHISKY:
                return null;
            case COCKTAIL:
                return null;
            case TRADITION:
                return null;
            case HOMETENDER:
                return null;
        }
        return null;
    }
}
