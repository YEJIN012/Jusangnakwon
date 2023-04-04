package com.osakak.jusangnakwon.domain.feed.application;

import com.osakak.jusangnakwon.common.errors.UserNotFoundException;
import com.osakak.jusangnakwon.domain.feed.api.response.RecordListResponse;
import com.osakak.jusangnakwon.domain.feed.api.response.ScrapListResponse;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dto.CalendarDto;
import com.osakak.jusangnakwon.domain.feed.dto.ReviewListItemDto;
import com.osakak.jusangnakwon.domain.feed.dto.CalendarWithReviewsDto;
import com.osakak.jusangnakwon.domain.feed.dto.RecordListDto;
import com.osakak.jusangnakwon.domain.feed.mapper.MypageDtoMapper;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.entity.User;
import java.time.LocalDate;
import java.util.ArrayList;
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
        Page<RecordListDto> recordPage = feedRepository.findRecordPageByUserId(user.getId(),
                pageable);
        return getRecordListResponse(recordPage.getTotalPages(), recordPage.getPageable(),
                recordPage.getContent());
    }

    public ScrapListResponse getScrapList(Long id, Pageable pageable) {
        User user = findUser(id);
        Page<LiquorListItemDto> scrapPage = feedRepository.findScrapPageByUserId(user.getId(),
                pageable);
        return getScrapListResponse(scrapPage.getTotalPages(), scrapPage.getPageable(),
                scrapPage.getContent());
    }

    public List<CalendarWithReviewsDto> getCalendarByMonth(Long id, Integer year, Integer month) {
        User user = findUser(id);
        LocalDate date = LocalDate.of(year, month, 1);
        List<CalendarDto> calendars = feedRepository.findCalendarByUserIdAndDate(user.getId(),
                date);
        List<CalendarWithReviewsDto> calendarWithReviewsDtoList = new ArrayList<>();
        for (CalendarDto c : calendars) {
            List<ReviewListItemDto> reviews = feedRepository.findReviewsByUserIdAndDate(
                    user.getId(), c.getDate());
            calendarWithReviewsDtoList.add(
                    CalendarWithReviewsDto.builder().date(c.getDate()).liquorType(c.getLiquorType())
                            .reviews(reviews).build());
        }
        return calendarWithReviewsDtoList;
    }

    private RecordListResponse getRecordListResponse(int totalPage, Pageable pageable,
            List<RecordListDto> list) {
        pageNumber = pageable.getPageNumber();
        return mypageDtoMapper.toRecordListResponse(list, totalPage, pageNumber);
    }

    private ScrapListResponse getScrapListResponse(int totalPage, Pageable pageable,
            List<LiquorListItemDto> list) {
        pageNumber = pageable.getPageNumber();
        return mypageDtoMapper.toScrapListResponse(list, totalPage, pageNumber);
    }

    private User findUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }
}
