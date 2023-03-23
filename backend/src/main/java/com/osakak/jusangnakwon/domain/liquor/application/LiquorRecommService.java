package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.SojuResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.SojuRepository;
import com.osakak.jusangnakwon.domain.liquor.dao.WineRepository;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorRecommInfoDto;
import com.osakak.jusangnakwon.domain.liquor.dto.SojuItem;
import com.osakak.jusangnakwon.domain.liquor.entity.Soju;
import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.SojuMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.WineMapper;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LiquorRecommService {
    private final WineRepository wineRepository;
    private final LiquorMapper liquorMapper;
    private final WineMapper wineMapper;
    private final SojuRepository sojuRepository;
    private final SojuMapper sojuMapper;


    public LiquorDetailResponse findLiquorDetail(String id) {
        ObjectId objectId = new ObjectId(id);
        Wine wine = wineRepository.findById(objectId);

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
            ObjectId itemId = new ObjectId(item);
            Wine wine = wineRepository.findById(itemId);
            LiquorListItemDto itemInfo = new LiquorListItemDto();
            itemInfo.setId(item);
            itemInfo.setName(wine.getName());
            out.add(itemInfo);
        }
        return out;
    }

    public SojuResponse findLiquorDetailMysql(Long id) {
        Optional<Soju> byId = sojuRepository.findById(id);
        SojuResponse out = new SojuResponse();
        if (byId.isPresent()) {
            Soju soju = byId.get();
            Long itemId1 = soju.getSimilarLiquor().getItemId1();
            Long itemId3 = soju.getSimilarLiquor().getItemId3();
            Long itemId4 = soju.getSimilarLiquor().getItemId4();
            Long itemId5 = soju.getSimilarLiquor().getItemId5();
            Long itemId2 = soju.getSimilarLiquor().getItemId2();
            List<Long> list = new ArrayList<>();
            list.add(itemId2);
            list.add(itemId1);
            list.add(itemId3);
            list.add(itemId4);
            list.add(itemId5);
            List<SojuItem> sojuItems = new ArrayList<>();
            for (Long ids :
                    list) {
                Soju soju1 = sojuRepository.findById(ids).get();
                SojuItem sojuItem = new SojuItem();
                sojuItem.setId(soju1.getId());
                sojuItem.setName(soju1.getName());
                sojuItems.add(sojuItem);
            }


            out.setId(id);
            out.setName(soju.getName());
            out.setSimilarItem(sojuItems);
        }
        return out;
    }
}
