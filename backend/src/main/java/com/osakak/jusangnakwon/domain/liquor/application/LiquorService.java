package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.WineRepository;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.SearchType;
import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.WineMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LiquorService {
    private final WineRepository wineRepository;
    private final WineMapper wineMapper;
    private final LiquorMapper liquorMapper;

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
                System.out.println("rank");
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
        switch (liquorType) {
            case WHISKY:
                return null;
            case WINE:
                // TODO: 조회 부분 랭킹 순으로 변경하기
                Page<Wine> wines = wineRepository.findAll(pageable);

                List<LiquorListItemDto> liquorListItemDtos = wineMapper.winesToSearchLiquorDtos(wines.getContent());
                int totalPages = wines.getTotalPages();
                int pageNumber = wines.getPageable().getPageNumber();
                return liquorMapper.toMainPageResponse(liquorListItemDtos, totalPages, pageNumber);
            case BEER:
                return null;
            case COCKTAIL:
                return null;
            case TRADITION:
                return null;
        }
        return null;
    }
}
