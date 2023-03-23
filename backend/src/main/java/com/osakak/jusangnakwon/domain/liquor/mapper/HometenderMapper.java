package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.api.request.HometenderRequest;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Hometender;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface HometenderMapper {
    Hometender hometenderDtoToHometender(HometenderRequest hometenderRequest);

}
