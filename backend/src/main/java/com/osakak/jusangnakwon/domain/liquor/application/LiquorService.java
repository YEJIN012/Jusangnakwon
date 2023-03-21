package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.WineRepository;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.SearchType;
import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.WineMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LiquorService {
    private final WineRepository wineRepository;
    private final WineMapper wineMapper;
    private final LiquorMapper liquorMapper;

    public LiquorListMainResponse getLiquorList(LiquorType liquorType, SearchType searchType, Pageable pageable) {
        return getLiquorListBySearchType(liquorType, searchType, pageable);
    }

    private LiquorListMainResponse getLiquorListBySearchType(LiquorType liquorType, SearchType searchType, Pageable pageable) {
        switch (searchType) {
            case RANK:
                System.out.println("rank");
                return getLiquorListByType(liquorType, pageable);
            case RECOMM:
                System.out.println("recomm");
                return null;
        }
        return null;
    }

    private LiquorListMainResponse getLiquorListByType(LiquorType liquorType, Pageable pageable) {
        switch (liquorType) {
            case WHISKY:
                System.out.println("whisky");
                return null;
            case WINE:
                System.out.println("wine");

                Page<Wine> wines = wineRepository.findAll(pageable);
                System.out.println(wines.getPageable().getPageNumber());
                System.out.println(wines.getTotalPages());
                return liquorMapper.toMainPageResponse(wineMapper.winesToSearchLiquorDtos(wines.getContent()), wines.getTotalPages(), wines.getPageable().getPageNumber());
        }
        return null;
    }


}
