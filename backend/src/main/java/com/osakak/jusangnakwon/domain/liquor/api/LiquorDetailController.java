package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.liquor.application.LiquorDetailService;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
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
    private final LiquorDetailService liquorDetailService;

    /**
     * 와인 상세 페이지
     *
     * @param id 술 아이디
     * @return 술 정보
     */
    @GetMapping("l1/{id}")
    public ResponseEntity<ResponseDto> wineDetail(@PathVariable Long id) {
        liquorDetailService.getLiquorDetail(LiquorType.WINE, id);
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 위스키 상세 페이지
     *
     * @param id 술 아이디
     * @return 술 정보
     */
    @GetMapping("l2/{id}")
    public ResponseEntity<ResponseDto> whiskyDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 맥주 상세 페이지
     *
     * @param id 술 아이디
     * @return 술 정보
     */
    @GetMapping("l3/{id}")
    public ResponseEntity<ResponseDto> beerDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 전통주 상세 페이지
     *
     * @param id 술 아이디
     * @return 술 정보
     */
    @GetMapping("l4/{id}")
    public ResponseEntity<ResponseDto> traditionDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 칵테일 상세 페이지
     *
     * @param id 술 아이디
     * @return 술 정보
     */
    @GetMapping("l5/{id}")
    public ResponseEntity<ResponseDto> cocktailDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 홈텐더 상세 페이지
     *
     * @param id 술 아이디
     * @return 술 정보
     */
    @GetMapping("l6/{id}")
    public ResponseEntity<ResponseDto> hometenderDetail(@PathVariable String id) {
        return ResponseEntity.ok(ResponseDto.builder().build());
    }


}
