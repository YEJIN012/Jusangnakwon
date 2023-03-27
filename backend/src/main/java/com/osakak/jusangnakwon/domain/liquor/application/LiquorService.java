package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.*;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.SearchType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorCustomMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LiquorService {
    private final WineRepository wineRepository;
    private final BeerRepository beerRepository;
    private final WhiskyRepository whiskyRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final LiquorCustomMapper liquorCustomMapper;
    private final LiquorMapper liquorMapper;
    static int pageNumber = 0;

    /**
     * 주종별, 검색 타입별 메인 페이지 뿌려줄 응답 구성
     *
     * @param liquorType 주종 타입
     * @param searchType 검색 타입
     * @param pageable   페이징
     * @return 페이징 포함 주종 id, name 정보
     */
    public LiquorListMainResponse getLiquorList(LiquorType liquorType, SearchType searchType, Pageable pageable) {
        return getLiquorListBySearchType(liquorType, searchType, pageable);
    }

    /**
     * 검색 타입 나누기
     *
     * @param liquorType 주종 타입
     * @param searchType 검색 타입
     * @param pageable   페이징
     * @return 페이징 포함 주종 id, name 정보
     */
    private LiquorListMainResponse getLiquorListBySearchType(LiquorType liquorType, SearchType searchType, Pageable pageable) {
        switch (searchType) {
            case RANK:
                return getLiquorListByRank(liquorType, pageable);
            case RECOMM:
                System.out.println("recomm");
                return null;
        }
        return null;
    }

    /**
     * 주종별 랭킹 조회
     *
     * @param liquorType 주종 타입
     * @param pageable   페이징
     * @return 페이징 포함 주종 id, name 정보
     */
    private LiquorListMainResponse getLiquorListByRank(LiquorType liquorType, Pageable pageable) {
        List<LiquorListItemDto> list = new ArrayList<>();
        switch (liquorType) {
            case WHISKY:
                Page<Whisky> whiskies = whiskyRepository.findByRatingAvg(pageable);
                list = liquorMapper.toLiquorListDtoWhisky(whiskies.getContent());
                return getLiquorListMainResponse(whiskies.getTotalPages(), whiskies.getPageable(), list);
            case WINE:
                Page<Wine> wines = wineRepository.findByRatingAvg(pageable);
                list = liquorMapper.toLiquorListDtoWine(wines.getContent());
                return getLiquorListMainResponse(wines.getTotalPages(), wines.getPageable(), list);
            case BEER:
                Page<Beer> beers = beerRepository.findByRatingAvg(pageable);
                list = liquorMapper.toLiquorListDtoBeer(beers.getContent());
                return getLiquorListMainResponse(beers.getTotalPages(), beers.getPageable(), list);
            case COCKTAIL:
                Page<Cocktail> cocktails = cocktailRepository.findByRatingAvg(pageable);
                list = liquorMapper.toLiquorListDtoCocktail(cocktails.getContent());
                return getLiquorListMainResponse(cocktails.getTotalPages(), cocktails.getPageable(), list);
            case TRADITION:
                Page<Tradition> traditions = traditionRepository.findByRatingAvg(pageable);
                list = liquorMapper.toLiquorListDtoTradition(traditions.getContent());
                return getLiquorListMainResponse(traditions.getTotalPages(), traditions.getPageable(), list);
            case HOMETENDER:
                Page<Hometender> hometenders = hometenderRepository.findByRatingAvg(pageable);
                list = liquorMapper.toLiquorListDtoHometender(hometenders.getContent());
                return getLiquorListMainResponse(hometenders.getTotalPages(), hometenders.getPageable(), list);
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
}
