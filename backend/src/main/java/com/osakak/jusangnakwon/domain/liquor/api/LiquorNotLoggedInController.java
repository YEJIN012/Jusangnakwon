package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class LiquorNotLoggedInController {
    /**
     * 주종별 랭킹 - 와인
     *
     * @return 랭킹순 5개
     */
    @GetMapping("rank/l1")
    public ResponseEntity<ResponseDto> rankWine() {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 랭킹 - 위스키
     *
     * @return 랭킹순 5개
     */
    @GetMapping("rank/l2")
    public ResponseEntity<ResponseDto> rankWhisky() {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 랭킹 - 맥주
     *
     * @return 랭킹순 5개
     */
    @GetMapping("rank/l3")
    public ResponseEntity<ResponseDto> rankBeer() {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 랭킹 - 전통주
     *
     * @return 랭킹순 5개
     */
    @GetMapping("rank/l4")
    public ResponseEntity<ResponseDto> rankTradition() {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 랭킹 - 칵테일
     *
     * @return 랭킹순 5개
     */
    @GetMapping("rank/l5")
    public ResponseEntity<ResponseDto> rankCocktail() {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }
}
