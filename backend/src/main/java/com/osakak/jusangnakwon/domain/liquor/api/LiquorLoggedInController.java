package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.application.LiquorLoggedInService;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.dto.SearchType;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 로그인 시 api
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("api/rs")
public class LiquorLoggedInController {
    private final LiquorLoggedInService liquorService;

    /**
     * 주종별 랭킹순 추천 페이징 처리
     *
     * @param page       현재 페이지
     * @param liquorType 주종 타입
     * @return 페이지 정보 포함 술 id, name 정보
     */
    private LiquorListMainResponse getLiquorListWithPaging(int page, LiquorType liquorType, User user) {
        Pageable pageable = PageRequest.of(page, 6);
        return liquorService.getLiquorListByUser(liquorType, pageable, user);
    }

    /**
     * 주종별 추천 - 와인
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l1")
    public ResponseEntity<ResponseDto> recommendWine(@RequestParam int page,@AuthenticationPrincipal User user) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.WINE,user);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 추천 - 위스키
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l2")
    public ResponseEntity<ResponseDto> recommendWhisky(@RequestParam int page,@AuthenticationPrincipal User user) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.WHISKY,user);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 추천 - 맥주
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l3")
    public ResponseEntity<ResponseDto> recommendBeer(@RequestParam int page,@AuthenticationPrincipal User user) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.BEER,user);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 추천 - 전통주
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l4")
    public ResponseEntity<ResponseDto> recommendTradition(@RequestParam int page,@AuthenticationPrincipal User user) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.TRADITION,user);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 주종별 추천 - 칵테일
     * user state: logged in
     *
     * @return 추천 4개(개수는 임시)
     */
    @GetMapping("l5")
    public ResponseEntity<ResponseDto> recommendCocktail(@RequestParam int page,@AuthenticationPrincipal User user) {
        LiquorListMainResponse liquorList = getLiquorListWithPaging(page, LiquorType.COCKTAIL,user);
        ResponseDto responseDto = ResponseDto.builder()
                .success(true)
                .body(liquorList)
                .build();
        return ResponseEntity.ok(responseDto);
    }

}
