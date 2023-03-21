package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.dto.SearchLiquorDto;
import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WineMapper {
    List<SearchLiquorDto> wineToSearchLiquorDto(Wine wine);
}
