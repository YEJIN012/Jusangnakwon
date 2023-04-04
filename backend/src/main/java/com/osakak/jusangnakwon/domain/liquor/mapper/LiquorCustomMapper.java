package com.osakak.jusangnakwon.domain.liquor.mapper;

import com.osakak.jusangnakwon.domain.liquor.api.request.HometenderRequest;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.dto.HometenderDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.TasteDto;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface LiquorCustomMapper {
  /**
   * 메인 페이지에 보여줄 페이징된 술 리스트
   *
   * @param content       술 id, name 데이터
   * @param totalPage     전체 페이지
   * @param curPageNumber 현재 페이지
   * @return 페이징 처리된 응답
   */
  LiquorListMainResponse toMainPageResponse(
    List<LiquorListItemDto> content,
    int totalPage,
    int curPageNumber
  );
}
