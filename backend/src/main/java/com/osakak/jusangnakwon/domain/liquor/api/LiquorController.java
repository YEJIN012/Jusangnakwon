package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.feed.api.request.CreateFeedRequest;
import com.osakak.jusangnakwon.domain.liquor.api.request.HometenderRequest;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.RandomHometenderResponse;
import com.osakak.jusangnakwon.domain.liquor.application.LiquorService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "liquor", description = "공통 술 api")
@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class LiquorController {
    private final LiquorService liquorCommonService;

    /**
     * 홈텐더 랜덤 추천
     * user state: logged in / not logged in
     *
     * @return 홈텐더 1개 추천
     */
    @GetMapping("rd/hometender")
    @ApiOperation(value = "랜덤 홈텐더 추천", notes = "홈텐더 칵테일 중 하나를 랜덤으로 추천합니다")
    @ApiResponses(
            @ApiResponse(code = 200, message = "성공")
    )
    @Tag(name = "liquor")
    public ResponseEntity<ResponseDto> randHometender() {
        RandomHometenderResponse response = liquorCommonService.getRandomHometender();

        return ResponseEntity.ok(ResponseDto.builder()
                .body(response)
                .success(true)
                .build());
    }

    /**
     * 술 키워드 검색
     *
     * @param keyword 사용자 입력 키워드
     * @param page    현재 페이지
     * @return 키워드로 검색된 술 리스트
     */
    @GetMapping("search/{keyword}")
    @Tag(name = "liquor")
    public ResponseEntity<ResponseDto> searchLiquor(@PathVariable String keyword, @RequestParam int page) {
        LiquorListMainResponse liquorSearchResponse = liquorCommonService.searchLiquorByKeyword(page, keyword);

        ResponseDto responseDto = ResponseDto.builder()
                .body(liquorSearchResponse)
                .success(true).build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * [POST] /api/hometender : 홈텐더 레시피 생성
     *
     * @return LiquorDetailResponse : 생성된 홈텐더 레시피 상세내용
     */
    //@param user 유저 로그인 정보 주석에 추가해야함.
    @Tag(name = "liquor")
    @Operation(summary = "홈텐더 레시피 생성", description = "홈텐더 레시피를 생성하고 생성된 홈텐더 레시피 상세내용을 리턴")
    @PostMapping("hometender/{userId}")
    public ResponseEntity<ResponseDto> createHometender(@PathVariable Long userId,
            @RequestBody @Valid HometenderRequest hometenderRequest){

        return null;
    }
}
