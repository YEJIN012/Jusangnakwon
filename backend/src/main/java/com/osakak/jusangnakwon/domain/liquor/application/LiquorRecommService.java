package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.WineRepository;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorRecommInfoDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.WineMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LiquorRecommService {
    private final WineRepository wineRepository;
    private final LiquorMapper liquorMapper;
    private final WineMapper wineMapper;


    public LiquorDetailResponse findLiquorDetail(Long id) {

        Wine wine = wineRepository.findById(id);

        LiquorRecommInfoDto liquorRecommInfoDto = wineMapper.toRecommInfo(wine);
        List<LiquorListItemDto> liquorListItemDto = getLiquorListItemDto(liquorRecommInfoDto.getSimilar_liquor());

        LiquorDetailResponse out = new LiquorDetailResponse();
        out.setId(liquorRecommInfoDto.getId());
        out.setName(liquorRecommInfoDto.getName());
        out.setSimilarItem(liquorListItemDto);
        return out;
    }

    private List<LiquorListItemDto> getLiquorListItemDto(List<String> similarLiquor) {
        List<LiquorListItemDto> out = new ArrayList<>();
        for (String item :
                similarLiquor) {

            Wine wine = wineRepository.findById(1L);
            LiquorListItemDto itemInfo = new LiquorListItemDto();
            itemInfo.setId(item);
            itemInfo.setName(wine.getName());
            out.add(itemInfo);
        }
        return out;
    }
}
