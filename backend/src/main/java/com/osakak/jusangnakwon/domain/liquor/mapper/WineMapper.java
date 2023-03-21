package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorResponse;
import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WineMapper {
    @Named("E2RW")
    @Mapping(source = "id", target = "_id")
    @Mapping(source = "name", target = "name")
    LiquorResponse wineToSearchLiquorDto(Wine wine);
    @IterableMapping(qualifiedByName = "E2RW")
    List<LiquorResponse> winesToSearchLiquorDtos(List<Wine> wine);
}
