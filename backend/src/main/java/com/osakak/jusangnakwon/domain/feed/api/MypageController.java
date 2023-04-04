package com.osakak.jusangnakwon.domain.feed.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.feed.api.response.CalendarResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.RecordListResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.ScrapListResponse;
import com.osakak.jusangnakwon.domain.feed.application.MypageService;
import com.osakak.jusangnakwon.domain.feed.dto.CalendarDto;
import com.osakak.jusangnakwon.domain.feed.dto.CalendarWithReviewsDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.mapper.MypageDtoMapper;
import com.osakak.jusangnakwon.domain.user.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "mypage", description = "마이페이지 API")
public class MypageController {

    private final MypageService mypageService;
    private final MypageDtoMapper mypageDtoMapper = Mappers.getMapper(MypageDtoMapper.class);

    /**
     * [GET] /api/calendar/{year}/{month} : 캘린더 한달분량 조회
     *
     * @param user  유저 로그인 정보
     * @param year  검색 년도
     * @param month 검색 월
     * @return CalendarResponse : 조회한 캘린더 한달분량
     */
    @Tag(name = "mypage", description = "마이페이지 API")
    @Operation(summary = "캘린더 한달분량 조회", description = "한달 분량의 캘린더 내용을 리턴")
    @GetMapping("/api/calendar/{year}/{month}")
    public ResponseEntity<ResponseDto> getCalendarByMonth(@AuthenticationPrincipal User user,
            @PathVariable Integer year, @PathVariable Integer month) {
        List<CalendarWithReviewsDto> calendarWithReviewsDtoList = mypageService.getCalendarByMonth(
                user.getId(), year, month);
        return ResponseEntity.ok(ResponseDto.builder().success(true)
                .body(calendarWithReviewsDtoList.stream()
                        .map(mypageDtoMapper::calendarWithReviewsDtoToCalendarResponse)
                        .collect(Collectors.toList())).build());
    }

    /**
     * [GET] /api/mypage/record : 내가 쓴 글 목록 조회
     *
     * @param user 유저 로그인 정보
     * @param page 현재 페이지
     * @return 내가 쓴 글 목록 (리뷰글, 질문글, 레시피)
     */
    @Tag(name = "mypage", description = "마이페이지 API")
    @Operation(summary = "내가 쓴 글 목록 조회", description = "내가 쓴 글 목록 리턴")
    @GetMapping("/api/mypage/record")
    public ResponseEntity<ResponseDto> getRecordList(@AuthenticationPrincipal User user,
            @RequestParam int page) {
        Pageable pageable = PageRequest.of(page, 20);
        RecordListResponse recordList = mypageService.getRecordList(user.getId(), pageable);
        ResponseDto responseDto = ResponseDto.builder().success(true).body(recordList).build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * [GET] /api/mypage/scrap : 내 스크랩 목록 조회
     *
     * @param user 유저 로그인 정보
     * @param page 현재 페이지
     * @return 내 스크랩 목록
     */
    @Tag(name = "mypage", description = "마이페이지 API")
    @Operation(summary = "내 스크랩 목록 조회", description = "내 스크랩 목록 리턴")
    @GetMapping("/api/mypage/scrap")
    public ResponseEntity<ResponseDto> getScrapList(@AuthenticationPrincipal User user,
            @RequestParam int page) {
        Pageable pageable = PageRequest.of(page, 20);
        ScrapListResponse scrapList = mypageService.getScrapList(user.getId(), pageable);
        ResponseDto responseDto = ResponseDto.builder().success(true).body(scrapList).build();
        return ResponseEntity.ok(responseDto);
    }

}
