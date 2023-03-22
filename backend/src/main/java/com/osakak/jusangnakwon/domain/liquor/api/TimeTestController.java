package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.application.LiquorRecommService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/test")
public class TimeTestController {
    private final LiquorRecommService liquorRecommService;

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> test(@PathVariable String id) {
        ResponseDto responseDto = new ResponseDto();

        LiquorDetailResponse liquorDetail = liquorRecommService.findLiquorDetail(id);
        responseDto.setBody(liquorDetail);
        responseDto.setSuccess(true);
        return ResponseEntity.ok(responseDto);
    }

}
