package com.osakak.jusangnakwon.domain.feed.application;

import com.osakak.jusangnakwon.common.errors.UserNotFoundException;
import com.osakak.jusangnakwon.domain.feed.api.response.RecordListResponse;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import com.osakak.jusangnakwon.domain.feed.mapper.MypageDtoMapper;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.entity.User;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MypageService {

    private final UserRepository userRepository;
    private final FeedRepository feedRepository;
    private final MypageDtoMapper mypageDtoMapper = Mappers.getMapper(MypageDtoMapper.class);
    static int pageNumber = 0;

    public RecordListResponse getRecordList(Long id, Pageable pageable) {
        User user = findUser(id);
        Page<RecordListDto> recordPage =  feedRepository.findRecordPageByUserId(user.getId(), pageable);
        return getRecordListResponse(recordPage.getTotalPages(), recordPage.getPageable(), recordPage.getContent());
    }

    private User findUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    private RecordListResponse getRecordListResponse(int totalPage, Pageable pageable, List<RecordListDto> list) {
        pageNumber = pageable.getPageNumber();
        return mypageDtoMapper.toRecordListResponse(list, totalPage, pageNumber);
    }
}
