package com.osakak.jusangnakwon.domain.feed.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.feed.api.request.CreateCommentRequest;
import com.osakak.jusangnakwon.domain.feed.api.request.CreateFeedRequest;
import com.osakak.jusangnakwon.domain.feed.api.request.UpdateLikeRequest;
import com.osakak.jusangnakwon.domain.feed.api.response.FeedListResponse;
import com.osakak.jusangnakwon.domain.feed.application.FeedService;
import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.mapper.FeedDtoMapper;
import com.osakak.jusangnakwon.domain.user.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@Tag(name = "feeds", description = "피드 API")
public class FeedController {

    private final FeedService feedService;

    private final FeedDtoMapper feedDtoMapper = Mappers.getMapper(FeedDtoMapper.class);


    /**
     * [POST] /api/feed : 피드 생성
     *
     * @param user              유저 로그인 정보
     * @param createFeedRequest 피드 생성 요청
     * @return FeedResponse : 생성된 피드 상세내용
     */
    @Tag(name = "feeds", description = "피드 API")
    @Operation(summary = "피드 생성", description = "피드를 생성하고 작성된 피드 상세내용을 리턴")
    @PostMapping("/api/feed")
    public ResponseEntity<ResponseDto> createFeed(@AuthenticationPrincipal User user,
            @RequestBody @Valid CreateFeedRequest createFeedRequest) {
        FeedDto requestFeedDto = feedDtoMapper.createFeedRequestToFeedDto(createFeedRequest);
        RatingDto requestRatingDto = feedDtoMapper.createFeedRequestToRatingDto(createFeedRequest);
        FeedDto feedDto = feedService.createFeed(user.getId(), requestFeedDto, requestRatingDto);
        return ResponseEntity.ok(ResponseDto.builder().success(true)
                .body(feedDtoMapper.feedDtoToFeedResponse(feedDto)).build());
    }

    /**
     * [GET] /api/feed/list : 최신 피드 목록 조회 - 리뷰글과 질문글 모두
     *
     * @param user 유저 로그인 정보
     * @param page 현재 페이지
     * @return 조회한 피드 목록
     */
    @Tag(name = "feeds", description = "피드 API")
    @Operation(summary = "피드 목록 조회", description = "피드 목록을 최신순으로 리턴")
    @GetMapping("/api/feed/list")
    public ResponseEntity<ResponseDto> getFeedList(@AuthenticationPrincipal User user,
            @RequestParam int page) {
        Pageable pageable = PageRequest.of(page, 20);
        FeedListResponse feeds = feedService.getFeedList(user.getId(), pageable);
        ResponseDto responseDto = ResponseDto.builder().success(true).body(feeds).build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * [GET] /api/feed/list/{type} : 최신 피드 목록 필터링 조회 - 리뷰글만 or 질문글만
     *
     * @param user 유저 로그인 정보
     * @param type 피드 타입 (리뷰글 / 질문글)
     * @param page 현재 페이지
     * @return 조회한 피드 목록
     */
    //
    @Tag(name = "feeds", description = "피드 API")
    @Operation(summary = "피드 목록 타입 필터링 조회 - 리뷰글, 질문글", description = "피드 목록을 타입으로 필터링하여 리턴")
    @GetMapping("/api/feed/list/{type}")
    public ResponseEntity<ResponseDto> getFeedListByType(@AuthenticationPrincipal User user,
            @PathVariable String type, @RequestParam int page) {
        Pageable pageable = PageRequest.of(page, 20);
        FeedListResponse feeds = feedService.getFeedListByType(user.getId(), type, pageable);
        ResponseDto responseDto = ResponseDto.builder().success(true).body(feeds).build();
        return ResponseEntity.ok(responseDto);
    }

    /**
     * [GET] /api/feed/list/{type} : 피드 상세내용 조회
     *
     * @param user   유저 로그인 정보
     * @param feedId 피드 id
     * @return FeedResponse : 조회한 피드 상세내용
     */
    @Tag(name = "feeds", description = "피드 API")
    @Operation(summary = "피드 상세내용 조회", description = "피드의 상세내용을 리턴")
    @GetMapping("/api/feed/{feedId}")
    public ResponseEntity<ResponseDto> getFeedDetail(@AuthenticationPrincipal User user,
            @PathVariable Long feedId) {
        FeedDto feedDto = feedService.getFeedDetail(user.getId(), feedId);
        return ResponseEntity.ok(ResponseDto.builder().success(true)
                .body(feedDtoMapper.feedDtoToFeedResponse(feedDto)).build());
    }

    /**
     * [POST] /api/comment : 댓글 생성
     *
     * @param user                 유저 로그인 정보
     * @param createCommentRequest 댓글 생성 요청
     * @return 댓글이 생성된 피드의 전체 댓글목록
     */
    @Tag(name = "feeds", description = "피드 API")
    @Operation(summary = "댓글 생성", description = "댓글을 생성하고 댓글이 작성된 피드의 전체 댓글목록을 리턴")
    @PostMapping("/api/comment")
    public ResponseEntity<ResponseDto> createComment(@AuthenticationPrincipal User user,
            @RequestBody @Valid CreateCommentRequest createCommentRequest) {
        CommentDto requestCommentDto = feedDtoMapper.createCommentRequestToCommentDto(
                createCommentRequest);
        List<CommentDto> comments = feedService.createComment(user.getId(), requestCommentDto);
        return ResponseEntity.ok(ResponseDto.builder().success(true)
                .body(comments.stream().map(feedDtoMapper::commentDtoToCommentResponse)
                        .collect(Collectors.toList())).build());
    }

    /**
     * [POST] /api/feed/like/{feed_id} : 좋아요 업데이트
     *
     * @param user              유저 로그인 정보
     * @param feedId            피드 id
     * @param updateLikeRequest 좋아요 업데이트 요청
     */
    @Tag(name = "feeds", description = "피드 API")
    @Operation(summary = "좋아요 업데이트", description = "좋아요 상태를 업데이트")
    @PutMapping("/api/feed/like/{feedId}")
    public void updateLike(@AuthenticationPrincipal User user, @PathVariable Long feedId,
            @RequestBody @Valid UpdateLikeRequest updateLikeRequest) {
        feedService.updateLike(user.getId(), feedId, updateLikeRequest.getIsLiked());
    }

}
