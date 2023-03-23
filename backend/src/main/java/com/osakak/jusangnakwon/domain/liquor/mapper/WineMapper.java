package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorRecommInfoDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Wine;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WineMapper {
    @Named("E2RW")
    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    LiquorListItemDto wineToSearchLiquorDto(Wine wine);

    @IterableMapping(qualifiedByName = "E2RW")
    List<LiquorListItemDto> winesToSearchLiquorDtos(List<Wine> wine);

    @Mapping(source = "id", target = "id")
    LiquorRecommInfoDto toRecommInfo(Wine wine);
}
