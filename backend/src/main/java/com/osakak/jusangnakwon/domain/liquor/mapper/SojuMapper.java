package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorRecommInfoDto;
import com.osakak.jusangnakwon.domain.liquor.entity.Soju;
import com.osakak.jusangnakwon.domain.liquor.entity.Wine;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SojuMapper {

    @Mapping(source = "id", target = "id")
    LiquorRecommInfoDto toRecommInfo(Soju soju);
}
