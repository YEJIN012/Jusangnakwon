package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.common.errors.SurveyNotFoundException;
import com.osakak.jusangnakwon.domain.feed.dao.RatingRepository;
import com.osakak.jusangnakwon.domain.liquor.api.response.HometenderResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.dao.similar.*;
import com.osakak.jusangnakwon.domain.liquor.dto.HometenderPageDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemScrapDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.*;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorCustomMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.user.dao.SurveyRepository;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LiquorLoggedInService {
    private final WineRepository wineRepository;
    private final BeerRepository beerRepository;
    private final WhiskyRepository whiskyRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final LiquorCustomMapper liquorCustomMapper;
    private final LiquorMapper liquorMapper;
    static int pageNumber = 0;
    private final RatingRepository ratingRepository;
    private final SimilarWineItemRepository similarWineItemRepository;
    private final SimilarBeerItemRepository similarBeerItemRepository;
    private final SimilarWhiskyItemRepository similarWhiskyItemRepository;
    private final SimilarCocktailItemRepository similarCocktailItemRepository;
    private final SimilarHometenderItemRepository similarHometenderItemRepository;
    private final SimilarTraditionItemRepository similarTraditionItemRepository;
    private final SurveyRepository surveyRepository;

    /**
     * 주종별 추천술 조회
     *
     * @param liquorType
     * @param pageable
     * @param user
     * @return
     */
    public LiquorListMainResponse getLiquorListByUser(LiquorType liquorType, Pageable pageable, User user) {
        List<LiquorListItemDto> list = new ArrayList<>();
        //요청된 주종 중에서 유저가 4.0 이상으로 평가한 술의 개수를 조회함
        List<Long> ratings = ratingRepository.countByLiquorTypeAndScoreAndUserId(liquorType, user.getId());
        System.out.println(liquorType+" "+ratings.size());
        //좋아하는 술이 4개 이상이라면 CBF추천을 해준다
        if (ratings.size() >= 4) {
            switch (liquorType) {
                case WINE:
                    List<SimilarWineItem> similarWineIdList = similarWineItemRepository.findAllByWineId(ratings);
                    Set<Long> similarWineUniqueList = new HashSet<>();
                    for (SimilarWineItem type : similarWineIdList) {
                        similarWineUniqueList.add(type.getSimilarLiquor().getItem1());
                        similarWineUniqueList.add(type.getSimilarLiquor().getItem2());
                        similarWineUniqueList.add(type.getSimilarLiquor().getItem3());
                        similarWineUniqueList.add(type.getSimilarLiquor().getItem4());
                        similarWineUniqueList.add(type.getSimilarLiquor().getItem5());
                    }
                    Page<LiquorListItemDto> wines = wineRepository.findById(similarWineUniqueList, pageable,user.getId());
                    list = wines.getContent();
                    return getLiquorListMainResponse(wines.getTotalPages(), wines.getPageable(), list);
                case WHISKY:
                    List<SimilarWhiskyItem> similarWhiskyIdList = similarWhiskyItemRepository.findAllByWhiskyId(ratings);
                    Set<Long> similarWhiskyUniqueList = new HashSet<>();
                    for (SimilarWhiskyItem type : similarWhiskyIdList) {
                        similarWhiskyUniqueList.add(type.getSimilarLiquor().getItem1());
                        similarWhiskyUniqueList.add(type.getSimilarLiquor().getItem2());
                        similarWhiskyUniqueList.add(type.getSimilarLiquor().getItem3());
                        similarWhiskyUniqueList.add(type.getSimilarLiquor().getItem4());
                        similarWhiskyUniqueList.add(type.getSimilarLiquor().getItem5());
                    }
                    Page<LiquorListItemDto> whiskies = whiskyRepository.findById(similarWhiskyUniqueList, pageable,user.getId());
                    list = whiskies.getContent();
                    return getLiquorListMainResponse(whiskies.getTotalPages(), whiskies.getPageable(), list);
                case BEER:
                    List<SimilarBeerItem> similarBeerIdList = similarBeerItemRepository.findAllByBeerId(ratings);
                    Set<Long> similarBeerUniqueList = new HashSet<>();
                    for (SimilarBeerItem type : similarBeerIdList) {
                        similarBeerUniqueList.add(type.getSimilarLiquor().getItem1());
                        similarBeerUniqueList.add(type.getSimilarLiquor().getItem2());
                        similarBeerUniqueList.add(type.getSimilarLiquor().getItem3());
                        similarBeerUniqueList.add(type.getSimilarLiquor().getItem4());
                        similarBeerUniqueList.add(type.getSimilarLiquor().getItem5());
                    }
                    Page<LiquorListItemDto> beers = beerRepository.findById(similarBeerUniqueList, pageable,user.getId());
                    list = beers.getContent();
                    return getLiquorListMainResponse(beers.getTotalPages(), beers.getPageable(), list);
                case COCKTAIL:
                    List<SimilarCocktailItem> similarCocktailIdList = similarCocktailItemRepository.findAllByCocktailId(ratings);
                    Set<Long> similarCocktailUniqueList = new HashSet<>();
                    for (SimilarCocktailItem type : similarCocktailIdList) {
                        similarCocktailUniqueList.add(type.getSimilarLiquor().getItem1());
                        similarCocktailUniqueList.add(type.getSimilarLiquor().getItem2());
                        similarCocktailUniqueList.add(type.getSimilarLiquor().getItem3());
                        similarCocktailUniqueList.add(type.getSimilarLiquor().getItem4());
                        similarCocktailUniqueList.add(type.getSimilarLiquor().getItem5());
                    }
                    Page<LiquorListItemDto> cocktails = cocktailRepository.findById(similarCocktailUniqueList, pageable,user.getId());
                    list = cocktails.getContent();
                    return getLiquorListMainResponse(cocktails.getTotalPages(), cocktails.getPageable(), list);
                case TRADITION:
                    List<SimilarTraditionItem> similarTraditionIdList = similarTraditionItemRepository.findAllByTraditionId(ratings);
                    Set<Long> similarTraditionUniqueList = new HashSet<>();
                    for (SimilarTraditionItem type : similarTraditionIdList) {
                        similarTraditionUniqueList.add(type.getSimilarLiquor().getItem1());
                        similarTraditionUniqueList.add(type.getSimilarLiquor().getItem2());
                        similarTraditionUniqueList.add(type.getSimilarLiquor().getItem3());
                        similarTraditionUniqueList.add(type.getSimilarLiquor().getItem4());
                        similarTraditionUniqueList.add(type.getSimilarLiquor().getItem5());
                    }
                    Page<LiquorListItemDto> traditions = traditionRepository.findById(similarTraditionUniqueList, pageable,user.getId());
                    list = traditions.getContent();
                    return getLiquorListMainResponse(traditions.getTotalPages(), traditions.getPageable(), list);
            }

        } else { //좋아하는 술이 4개 미만이라면 취향설문을 기반으로 유사한 술을 추천해준다
            Survey survey = surveyRepository.findByUserId(user.getId());
            if (survey == null) {
                throw new SurveyNotFoundException(user.getId());
            }
            switch (liquorType) {
                case WINE:
                    Page<LiquorListItemDto> wines = wineRepository.findByTaste(survey, pageable,user.getId());
                    list = wines.getContent();
                    return getLiquorListMainResponse(wines.getTotalPages(), wines.getPageable(), list);
                case WHISKY:
                    Page<LiquorListItemDto> whiskies = whiskyRepository.findByTaste(survey, pageable,user.getId());
                    list = whiskies.getContent();
                    return getLiquorListMainResponse(whiskies.getTotalPages(), whiskies.getPageable(), list);
                case BEER:
                    Page<LiquorListItemDto> beers = beerRepository.findByTaste(survey, pageable,user.getId());
                    list = beers.getContent();
                    return getLiquorListMainResponse(beers.getTotalPages(), beers.getPageable(), list);
                case COCKTAIL:
                    Page<LiquorListItemDto> cocktails = cocktailRepository.findByTaste(survey, pageable,user.getId());
                    list = cocktails.getContent();
                    return getLiquorListMainResponse(cocktails.getTotalPages(), cocktails.getPageable(), list);
                case TRADITION:
                    Page<LiquorListItemDto> traditions = traditionRepository.findByTaste(survey, pageable,user.getId());
                    list = traditions.getContent();
                    return getLiquorListMainResponse(traditions.getTotalPages(), traditions.getPageable(), list);
            }
        }

        return null;
    }

    /**
     * 메인 페이지 응답에 페이징 처리
     *
     * @param totalPage 전체 페이지
     * @param pageable  pageable 객체
     * @param list      데이터 리스트
     * @return 메인에 표시할 페이징 포함 데이터
     */
    private LiquorListMainResponse getLiquorListMainResponse(int totalPage, Pageable pageable, List<LiquorListItemDto> list) {
        pageNumber = pageable.getPageNumber();
        return liquorCustomMapper.toMainPageResponse(list, totalPage, pageNumber);
    }

    public HometenderResponse getRecommendHometender(User user) {
        Pageable pageable = PageRequest.of(0, 5);
        List<Long> ratings = ratingRepository.countByLiquorTypeAndScoreAndUserId(LiquorType.HOMETENDER, user.getId());
        if (ratings.size() >= 4) {
            List<SimilarHometenderItem> similarHometenderIdList = similarHometenderItemRepository.findAllByHometenderId(ratings);
            Set<Long> similarHometenderUniqueList = new HashSet<>();
            for (SimilarHometenderItem type : similarHometenderIdList) {
                similarHometenderUniqueList.add(type.getSimilarLiquor().getItem1());
                similarHometenderUniqueList.add(type.getSimilarLiquor().getItem2());
                similarHometenderUniqueList.add(type.getSimilarLiquor().getItem3());
                similarHometenderUniqueList.add(type.getSimilarLiquor().getItem4());
                similarHometenderUniqueList.add(type.getSimilarLiquor().getItem5());
            }
            Page<Hometender> hometenders = hometenderRepository.findById(similarHometenderUniqueList, pageable);
            List<HometenderPageDto> hometenderResponses = liquorMapper.toHometenderList(hometenders.getContent());
            return HometenderResponse.builder()
                    .content(hometenderResponses)
                    .build();
        } else {
            Survey survey = surveyRepository.findByUserId(user.getId());
            Page<Hometender> hometenders = hometenderRepository.findByTaste(survey, pageable);
            List<HometenderPageDto> hometenderResponses = liquorMapper.toHometenderList(hometenders.getContent());
            return HometenderResponse.builder()
                    .content(hometenderResponses)
                    .build();
        }
    }
}
