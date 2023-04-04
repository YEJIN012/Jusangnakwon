package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.api.response.RandomHometenderResponse;
import com.osakak.jusangnakwon.domain.liquor.dto.HometenderDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import com.osakak.jusangnakwon.domain.user.entity.User;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import java.util.stream.Collectors;

import java.util.Arrays;
import java.util.List;


@Mapper(componentModel = "spring", imports = {Arrays.class, Collectors.class})
public interface LiquorMapper {
    @Mapping(target = "materials", expression = "java(Arrays.asList(hometender.getMaterials().split(\",\"))" +
            ".stream().map(String::trim).collect(Collectors.toList()))")
    RandomHometenderResponse toRandHometender(Hometender hometender);

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

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "user", target = "user")
    @Mapping(source = "hometenderDto.image", target = "img")
    @Mapping(source = "hometenderDto.taste.salty", target = "salty")
    @Mapping(source = "hometenderDto.taste.sour", target = "sour")
    @Mapping(source = "hometenderDto.taste.bitter", target = "bitter")
    @Mapping(source = "hometenderDto.taste.sweet", target = "sweet")
    @Mapping(target = "similarHometenderItem", ignore = true)
    @Mapping(target = "dateCreated", ignore = true)
    Hometender hometenderDtoToHometender(HometenderDto hometenderDto, User user);

    @Mapping(source = "user.username", target = "writer.username")
    @Mapping(source = "user.profileImageUrl", target = "writer.profileImg")
    @Mapping(source = "img", target = "image")
    @Mapping(target = "scrapCnt", ignore = true)
    @Mapping(target = "scrapped", ignore = true)
    @Mapping(source = "salty", target = "taste.salty")
    @Mapping(source = "sour", target = "taste.sour")
    @Mapping(source = "bitter", target = "taste.bitter")
    @Mapping(source = "sweet", target = "taste.sweet")
    @Mapping(target = "reviews", ignore = true)
    @Mapping(target = "similarItems", ignore = true)
    HometenderDto hometenderToHometenderDto(Hometender hometender);
}
