package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.domain.liquor.mapper.HometenderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HometenderController {
    private final HometenderMapper hometenderMapper;
}
