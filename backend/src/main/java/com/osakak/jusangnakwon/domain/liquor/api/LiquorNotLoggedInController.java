package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.application.LiquorService;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.SearchType;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 비로그인 시 api
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class LiquorNotLoggedInController {
    private final LiquorService liquorService;

    /**
     * 주종별 랭킹순 추천 페이징 처리
     *
     * @param page       현재 페이지
     * @param liquorType 주종 타입
     * @return 페이지 정보 포함 술 id, name 정보
     */
    private LiquorListMainResponse getLiquorListWithPaging(int page, LiquorType liquorType) {
        Pageable pageable = PageRequest.of(page, 4);
        return liquorService.getLiquorList(liquorType, SearchType.RANK, pageable);
    }

    /**
     * 주종별 랭킹 - 와인
     *
     * @param page 현재 페이지
     * @return 랭킹순 4개씩
     */
    @GetMapping("rank/l1")
    public ResponseEntity<ResponseDto> rankWine(@RequestParam int page) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.WINE);
        return ResponseEntity.ok(ResponseDto.builder().body(liquorList).success(true).build());
    }

    /**
     * 주종별 랭킹 - 위스키
     *
     * @param page 현재 페이지
     * @return 랭킹순 4개씩
     */
    @GetMapping("rank/l2")
    public ResponseEntity<ResponseDto> rankWhisky(@RequestParam int page) {

        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.WHISKY);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 랭킹 - 맥주
     *
     * @param page 현재 페이지
     * @return 랭킹순 4개씩
     */
    @GetMapping("rank/l3")
    public ResponseEntity<ResponseDto> rankBeer(@RequestParam int page) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.BEER);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 랭킹 - 전통주
     *
     * @param page 현재 페이지
     * @return 랭킹순 4개씩
     */
    @GetMapping("rank/l4")
    public ResponseEntity<ResponseDto> rankTradition(@RequestParam int page) {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 주종별 랭킹 - 칵테일
     *
     * @param page 현재 페이지
     * @return 랭킹순 4개씩
     */
    @GetMapping("rank/l5")
    public ResponseEntity<ResponseDto> rankCocktail(@RequestParam int page) {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }
}
