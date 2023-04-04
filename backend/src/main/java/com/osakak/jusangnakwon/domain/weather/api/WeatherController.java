package com.osakak.jusangnakwon.domain.weather.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.weather.application.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/weather")
@RequiredArgsConstructor
public class WeatherController {
    private final WeatherService weatherService;

    @GetMapping("")
    public ResponseEntity<ResponseDto> getWeather() throws IOException {
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(weatherService.getWeather())
                .build();
        return ResponseEntity.ok(responseDto);
    }
}
