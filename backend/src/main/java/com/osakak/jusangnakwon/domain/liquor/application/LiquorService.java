package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.common.errors.NoLiquorNameExistException;
import com.osakak.jusangnakwon.common.errors.UserNotFoundException;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.RandomHometenderResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.dto.HometenderDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorCustomMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class LiquorService {

    private final UserRepository userRepository;
    private final BeerRepository beerRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final WhiskyRepository whiskyRepository;
    private final WineRepository wineRepository;
    private final LiquorMapper liquorMapper;
    private final LiquorCustomMapper liquorCustomMapper;

    /**
     * 사용자 검색
     *
     * @param keyword 술 이름
     * @return 연관된 술 리스트
     */

    public LiquorListMainResponse searchLiquorByKeyword(
            int page,
            String keyword
    ) {
        List<LiquorListItemDto> liquorByKeyword = getLiquorByKeyword(
                keyword.toLowerCase()
        );
        if (liquorByKeyword.isEmpty()) throw new NoLiquorNameExistException();
        int pageSize = liquorByKeyword.size() % 20;
        liquorByKeyword.sort(
                new Comparator<LiquorListItemDto>() {
                    @Override
                    public int compare(LiquorListItemDto o1, LiquorListItemDto o2) {
                        return o1.getName().compareTo(o2.getName());
                    }
                }
        );
        Page<LiquorListItemDto> pageList = convert(liquorByKeyword, page, pageSize);
        return liquorCustomMapper.toMainPageResponse(
                pageList.getContent(),
                pageList.getTotalPages(),
                pageList.getPageable().getPageNumber()
        );
    }

    /**
     * 주종별 키워드 검색 데이터 조회
     *
     * @param keyword 사용자 입력 키워드
     * @return 키워드를 포함한 술 이름 리스트
     */
    private List<LiquorListItemDto> getLiquorByKeyword(String keyword) {
        List<LiquorListItemDto> list = new ArrayList<>();

        Optional<List<Beer>> byKeyword = beerRepository.findByKeyword(keyword);
        byKeyword.ifPresent(beers ->
                list.addAll(liquorMapper.toLiquorListDtoBeer(beers))
        );
        Optional<List<Wine>> byKeyword1 = wineRepository.findByKeyword(keyword);
        byKeyword1.ifPresent(wines ->
                list.addAll(liquorMapper.toLiquorListDtoWine(wines))
        );
        Optional<List<Whisky>> byKeyword2 = whiskyRepository.findByKeyword(keyword);
        byKeyword2.ifPresent(whiskies ->
                list.addAll(liquorMapper.toLiquorListDtoWhisky(whiskies))
        );
        Optional<List<Cocktail>> byKeyword3 = cocktailRepository.findByKeyword(
                keyword
        );
        byKeyword3.ifPresent(cocktails ->
                list.addAll(liquorMapper.toLiquorListDtoCocktail(cocktails))
        );
        Optional<List<Tradition>> byKeyword4 = traditionRepository.findByKeyword(
                keyword
        );
        byKeyword4.ifPresent(traditions ->
                list.addAll(liquorMapper.toLiquorListDtoTradition(traditions))
        );
        Optional<List<Hometender>> byKeyword5 = hometenderRepository.findByKeyword(
                keyword
        );
        byKeyword5.ifPresent(hometenders ->
                list.addAll(liquorMapper.toLiquorListDtoHometender(hometenders))
        );
        return list;
    }

    /**
     * 키워드 조회 주종 리스트 페이징 처리
     *
     * @param list       주종 리스트 모은 데이터
     * @param pageNumber 현재 페이지 번호
     * @param pageSize   한번에 보여줄 데이터 개수
     * @param <T>
     * @return Page 객체
     */
    private <T> Page<T> convert(List<T> list, int pageNumber, int pageSize) {
        int startIndex = pageNumber * pageSize;
        int endIndex = Math.min(startIndex + pageSize, list.size());
        List<T> sublist = list.subList(startIndex, endIndex);
        return new PageImpl<>(
                sublist,
                PageRequest.of(pageNumber, pageSize),
                list.size()
        );
    }

    /**
     * 칵테일 랜덤 조회
     *
     * @return 칵테일 재료정보, 이름, 이미지
     */
    public RandomHometenderResponse getRandomHometender() {
        Pageable pageable = PageRequest.of(0, 1);
        Page<Hometender> hometenderPage = hometenderRepository.findByRandom(
                pageable
        );
        Hometender hometender = hometenderPage.getContent().get(0);
        System.out.println(hometender.getName());
        System.out.println(hometender.getMaterials());
        System.out.println(hometender.getImg());
        System.out.println(hometender.getId());
        return liquorMapper.toRandHometender(hometender);
    }

    /**
     * 홈텐더 레시피 생성
     *
     * @param id            유저 id
     * @param hometenderDto 홈텐더 레시피 생성에 필요한 정보
     * @return 생성한 홈텐더 레시피
     */
    @Transactional
    public HometenderDto createHometender(Long id, HometenderDto hometenderDto) {
        User user = findUser(id);
        Hometender hometender = liquorMapper.hometenderDtoToHometender(
                hometenderDto,
                user
        );
        hometender = hometenderRepository.save(hometender);
        hometenderDto = liquorMapper.hometenderToHometenderDto(hometender);
        hometenderDto.setScrapCnt(Long.valueOf("0"));
        hometenderDto.setScrapped(false);
        hometenderDto.setReviews(new ArrayList<>());
        hometenderDto.setSimilarItems(new ArrayList<>());
        return hometenderDto;
    }

    private User findUser(Long id) {
        return userRepository
                .findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}
