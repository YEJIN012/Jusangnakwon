package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LiquorMapper {
    /**
     * 술 객체 하나를 메인에 보여줄 리스트 아이템 하나로 만들어준다
     * - 모든 술 동일하게 동작
     *
     * @param beer 맥주 객체
     * @return 변경된 객체
     */
    @Named("BEER")
    LiquorListItemDto toLiquorItemBeer(Beer beer);

    /**
     * 술 객체를 담은 리스트를 메인에 보여줄 아이템으로 매핑
     *
     * @param beers 술 객체 리스트
     * @return 리스트
     */

    @IterableMapping(qualifiedByName = "BEER")
    List<LiquorListItemDto> toLiquorListDtoBeer(List<Beer> beers);

    @Named("COCKTAIL")
    LiquorListItemDto toLiquorItemCocktail(Cocktail cocktail);

    @IterableMapping(qualifiedByName = "COCKTAIL")
    List<LiquorListItemDto> toLiquorListDtoCocktail(List<Cocktail> cocktails);


    @Named("HOMETENDER")
    LiquorListItemDto toLiquorItemHometender(Hometender hometender);

    @IterableMapping(qualifiedByName = "HOMETENDER")
    List<LiquorListItemDto> toLiquorListDtoHometender(List<Hometender> hometenders);

    @Named("TRADITION")
    LiquorListItemDto toLiquorItemTradition(Tradition tradition);

    @IterableMapping(qualifiedByName = "TRADITION")
    List<LiquorListItemDto> toLiquorListDtoTradition(List<Tradition> traditions);

    @Named("WHISKY")
    LiquorListItemDto toLiquorItemWhisky(Whisky whisky);

    @IterableMapping(qualifiedByName = "WHISKY")
    List<LiquorListItemDto> toLiquorListDtoWhisky(List<Whisky> whiskies);

    @Named("WINE")
    LiquorListItemDto toLiquorItemWine(Wine wine);

    @IterableMapping(qualifiedByName = "WINE")
    List<LiquorListItemDto> toLiquorListDtoWine(List<Wine> wines);
}
