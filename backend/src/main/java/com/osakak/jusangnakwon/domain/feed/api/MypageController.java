package com.osakak.jusangnakwon.domain.feed.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.feed.api.response.RecordListResponse;
import com.osakak.jusangnakwon.domain.feed.application.MypageService;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.user.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "mypage", description = "마이페이지 API")
public class MypageController {

    private final MypageService mypageService;

    /**
     * [GET] /api/calendar/{year}/{month} : 캘린더 한달분량 조회
     *
     * @param user 유저 로그인 정보
     * @param feedId 피드 id
     *
     * @return FeedResponse : 조회한 피드 상세내용
     */
    /*
    @Tag(name = "mypage", description = "마이페이지 API")
    @Operation(
            summary = "피드 상세내용 조회",
            description = "피드의 상세내용을 리턴"
    )
    @GetMapping("/api/calendar/{year}/{month}")
    public ResponseEntity<ResponseDto> getCalendarByMonth(@AuthenticationPrincipal User user,
            @PathVariable Long feedId) {
        FeedDto feedDto = feedService.getFeedDetail(user.getId(), feedId);
        return ResponseEntity.ok(ResponseDto.builder().success(true)
                .body(feedDtoMapper.feedDtoToFeedResponse(feedDto)).build());
    }
     */

    /**
     * [GET] /api/mypage/record : 내가 쓴 글 목록 조회
     *
     * @param user 유저 로그인 정보
     * @param page 현재 페이지
     * @return 내가 쓴 글 목록 (리뷰글, 질문글, 레시피)
     */
    @Tag(name = "mypage", description = "마이페이지 API")
    @Operation(summary = "내가 쓴 글 목록 조회", description = "내가 쓴 글 목록 리턴")
    @GetMapping("/api/mypage/record/{userId}")
    public ResponseEntity<ResponseDto> getRecordList(@AuthenticationPrincipal User user,
            @RequestParam int page) {
        Pageable pageable = PageRequest.of(page, 20);
        RecordListResponse recordLists = mypageService.getRecordList(user.getId(), pageable);
        ResponseDto responseDto = ResponseDto.builder().success(true).body(recordLists).build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * [GET] /api/feed/list/{type} : 피드 상세내용 조회
     *
     * @param user 유저 로그인 정보
     * @param feedId 피드 id
     *
     * @return FeedResponse : 조회한 피드 상세내용
     */
    /*
    @Tag(name = "mypage", description = "마이페이지 API")
    @Operation(
            summary = "피드 상세내용 조회",
            description = "피드의 상세내용을 리턴"
    )
    @GetMapping("/api/feed/{feedId}")
    public ResponseEntity<ResponseDto> getFeedDetail(@AuthenticationPrincipal User user,
            @PathVariable Long feedId) {
        FeedDto feedDto = feedService.getFeedDetail(user.getId(), feedId);
        return ResponseEntity.ok(ResponseDto.builder().success(true)
                .body(feedDtoMapper.feedDtoToFeedResponse(feedDto)).build());
    }
     */

}
