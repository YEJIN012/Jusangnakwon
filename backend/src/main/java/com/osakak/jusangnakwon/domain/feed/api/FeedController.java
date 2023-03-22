package com.osakak.jusangnakwon.domain.feed.api;

import com.osakak.jusangnakwon.common.response.ResponseDto;
import com.osakak.jusangnakwon.domain.feed.api.request.WriteFeedRequest;
import com.osakak.jusangnakwon.domain.feed.api.response.WriteFeedResponse;
import com.osakak.jusangnakwon.domain.feed.application.FeedService;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.mapper.FeedDtoMapper;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class FeedController {

    private final FeedService feedService;

    private final FeedDtoMapper feedDtoMapper = Mappers.getMapper(FeedDtoMapper.class);

    /**
     * [POST] /api/feed : 피드 작성
     *
     * @return WriteFeedResponse : 생성된 피드 정보
     */
    @PostMapping("/api/feed/{id}")
    public ResponseEntity<ResponseDto> create(@PathVariable String id, @RequestBody @Valid WriteFeedRequest writeFeedRequest){
        FeedDto requestDto = feedDtoMapper.fromWriteRequest(writeFeedRequest);
        FeedDto feedDto = feedService.createFeed(id, requestDto);
        return ResponseEntity.ok(new ResponseDto(true, null, feedDto));
    }

}
