package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.feed.dao.ScrapRepository;
import com.osakak.jusangnakwon.domain.liquor.api.response.HometenderResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.dto.HometenderPageDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Hometender;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorCustomMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LiquorNotLoggedInService {
    private final WineRepository wineRepository;
    private final BeerRepository beerRepository;
    private final WhiskyRepository whiskyRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final LiquorCustomMapper liquorCustomMapper;
    private final LiquorMapper liquorMapper;
    private final ScrapRepository scrapRepository;
    static int pageNumber = 0;

    /**
     * 주종별, 검색 타입별 메인 페이지 뿌려줄 응답 구성
     *
     * @param liquorType 주종 타입
     * @param pageable   페이징
     * @return 페이징 포함 주종 id, name 정보
     */
    public LiquorListMainResponse getLiquorList(User user, LiquorType liquorType, Pageable pageable) {
        return getLiquorListByRank(user, liquorType, pageable);
    }

    /**
     * 주종별 랭킹 조회
     *
     * @param liquorType 주종 타입
     * @param pageable   페이징
     * @return 페이징 포함 주종 id, name 정보
     */
    private LiquorListMainResponse getLiquorListByRank(User user, LiquorType liquorType, Pageable pageable) {
        List<LiquorListItemDto> list = new ArrayList<>();
        Page<LiquorListItemDto> listByRating = null;
        switch (liquorType) {
            case WHISKY:
                if (user == null) {
                    listByRating = whiskyRepository.findListByRatingIsNotLoggedIn(pageable);
                } else {
                    listByRating = whiskyRepository.findListByRatingIsLogin(pageable, user.getId());
                }
                return getLiquorListMainResponse(list, listByRating);
            case WINE:
                if (user == null) {
                    listByRating = wineRepository.findListByRatingIsNotLoggedIn(pageable);
                } else {
                    listByRating = wineRepository.findListByRatingIsLogin(pageable, user.getId());
                }
                return getLiquorListMainResponse(list, listByRating);
            case BEER:
                if (user == null) {
                    listByRating = beerRepository.findListByRatingIsNotLoggedIn(pageable);
                } else {
                    listByRating = beerRepository.findListByRatingIsLogin(pageable, user.getId());
                }
                return getLiquorListMainResponse(list, listByRating);
            case COCKTAIL:
                if (user == null) {
                    listByRating = cocktailRepository.findListByRatingIsNotLoggedIn(pageable);
                } else {
                    listByRating = cocktailRepository.findListByRatingIsLogin(pageable, user.getId());
                }
                return getLiquorListMainResponse(list, listByRating);
            case TRADITION:
                if (user == null) {
                    listByRating = traditionRepository.findListByRatingIsNotLoggedIn(pageable);
                } else {
                    listByRating = traditionRepository.findListByRatingIsLogin(pageable, user.getId());
                }
                return getLiquorListMainResponse(list, listByRating);
            case HOMETENDER:
                if (user == null) {
                    listByRating = hometenderRepository.findListByRatingIsNotLoggedIn(pageable);
                } else {
                    listByRating = hometenderRepository.findListByRatingIsLogin(pageable, user.getId());
                }
                return getLiquorListMainResponse(list, listByRating);
        }
        return null;
    }

    private LiquorListMainResponse getLiquorListMainResponse(List<LiquorListItemDto> list, Page<LiquorListItemDto> listByRating) {
        list = listByRating.getContent();
        return getLiquorListMainResponse(listByRating.getTotalPages(), listByRating.getPageable(), list);
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

    public HometenderResponse getRankHometender() {
        Pageable pageable = PageRequest.of(0, 5);
        Page<Hometender> page = hometenderRepository.findByRatingAvg(pageable);
        List<HometenderPageDto> hometenderResponses = liquorMapper.toHometenderList(page.getContent());
        return HometenderResponse.builder()
                .content(hometenderResponses)
                .build();
    }
}
