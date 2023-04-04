package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.api.request.HometenderRequest;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.dto.HometenderDto;
import com.osakak.jusangnakwon.domain.liquor.dto.TasteDto;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper
public interface LiquorDtoMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "writer", ignore = true)
    @Mapping(target = "ratingAvg", ignore = true)
    @Mapping(target = "scrapCnt", ignore = true)
    @Mapping(target = "scrapped", ignore = true)
    @Mapping(source = "ingredients", target = "materials", qualifiedByName = "listToString")
    @Mapping(target = "liquorType", ignore = true)
    @Mapping(target = "reviews", ignore = true)
    @Mapping(target = "similarItems", ignore = true)
    HometenderDto hometenderRequestToHometenderDto(HometenderRequest hometenderRequest);

    @Mapping(source = "materials", target = "ingredients", qualifiedByName = "stringToList")
    @Mapping(source = "taste", target = "tastes", qualifiedByName = "tasteDtoToList")
    LiquorDetailResponse hometenderDtoToLiquorDetailResponse(HometenderDto hometenderDto);

    @Named("listToString")
    default String listToString(List<String> list) {
        return list.stream().collect(Collectors.joining(", "));
    }

    @Named("stringToList")
    default List<String> stringToList(String str) {
        return Arrays.asList(str.split("\\s*,\\s*"));
    }

    @Named("tasteDtoToList")
    default List<String> tasteDtoToList(TasteDto tasteDto) {
        return tasteDto.toTagList();
    }

}
