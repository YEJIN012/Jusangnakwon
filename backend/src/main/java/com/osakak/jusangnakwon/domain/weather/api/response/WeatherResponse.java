package com.osakak.jusangnakwon.domain.weather.api.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class WeatherResponse {
    int temperature;
    String message;
    String type;

    @Builder
    public WeatherResponse(int temperature, String message, String type) {
        this.temperature = temperature;
        this.message = message;
        this.type = type;
    }
}
