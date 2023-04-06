package com.osakak.jusangnakwon.domain.feed.dto;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;

import java.time.LocalDate;

public interface CalendarDto {

    LocalDate getDate();

    LiquorType getLiquorType();
}
