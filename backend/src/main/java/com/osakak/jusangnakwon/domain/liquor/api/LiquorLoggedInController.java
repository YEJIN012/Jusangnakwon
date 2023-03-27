package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 로그인 시 api
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("api/rs")
public class LiquorLoggedInController {
    /**
     * 주종별 추천 - 와인
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l1")
    public ResponseEntity<ResponseDto> recommendWine() {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 주종별 추천 - 위스키
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l2")
    public ResponseEntity<ResponseDto> recommendWhisky() {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 주종별 추천 - 맥주
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l3")
    public ResponseEntity<ResponseDto> recommendBeer() {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 주종별 추천 - 맥주
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l4")
    public ResponseEntity<ResponseDto> recommendTradition() {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }

    /**
     * 주종별 추천 - 칵테일
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l5")
    public ResponseEntity<ResponseDto> recommendCocktail() {

        return ResponseEntity.ok(ResponseDto.builder().build());
    }

}
