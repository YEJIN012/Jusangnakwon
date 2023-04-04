package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.api.response.CalendarResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.RecordListResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.ScrapListResponse;
import com.osakak.jusangnakwon.domain.feed.dto.CalendarWithReviewsDto;
import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface MypageDtoMapper {

    RecordListResponse toRecordListResponse(List<RecordListDto> content, int totalPage, int curPageNumber);

    ScrapListResponse toScrapListResponse(List<LiquorListItemDto> content, int totalPage, int curPageNumber);

    CalendarResponse calendarWithReviewsDtoToCalendarResponse(CalendarWithReviewsDto calendarWithReviewsDto);
}
