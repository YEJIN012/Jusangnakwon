package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "liquorDetail", description = "술 상세 페이지")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/detail")
public class LiquorDetailController {
    @GetMapping("l1/{id}")
    public ResponseEntity<ResponseDto> wineDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    @GetMapping("l2/{id}")
    public ResponseEntity<ResponseDto> whiskyDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    @GetMapping("l3/{id}")
    public ResponseEntity<ResponseDto> beerDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    @GetMapping("l4/{id}")
    public ResponseEntity<ResponseDto> traditionDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    @GetMapping("l5/{id}")
    public ResponseEntity<ResponseDto> cocktailDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    @GetMapping("l6/{id}")
    public ResponseEntity<ResponseDto> hometenderDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }


}
