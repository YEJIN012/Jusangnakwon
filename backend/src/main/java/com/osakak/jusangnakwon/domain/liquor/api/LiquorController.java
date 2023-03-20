package com.osakak.jusangnakwon.domain.liquor.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.liquor.mapper.HometenderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class LiquorController {
    private final HometenderMapper hometenderMapper;

    /**
     * 홈텐더 랜덤 추천
     * user state: logged in / not logged in
     *
     * @return 홈텐더 1개 추천
     */
    @GetMapping("rd/hometender")
    public ResponseEntity<ResponseDto> randHometender() {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * 술 이름으로 검색
     *
     * @param keyword: 술 이름
     * @return 술 이름 조회 결과
     */
    @GetMapping("search/{keyword}")
    public ResponseEntity<ResponseDto> searchLiquor(@PathVariable String keyword) {
        ResponseDto responseDto = new ResponseDto();
        return ResponseEntity.ok(responseDto);
    }
}
