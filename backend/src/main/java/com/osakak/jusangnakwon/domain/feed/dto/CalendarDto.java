package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.ReviewListDto;
import java.time.LocalDate;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

public interface CalendarDto {

    LocalDate getDate();
    LiquorType getLiquorType();
}
