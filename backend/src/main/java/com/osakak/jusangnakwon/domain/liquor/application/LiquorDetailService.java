package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.common.errors.LiquorNotFoundException;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dao.ScrapRepository;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorDetailResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.dao.similar.*;
import com.osakak.jusangnakwon.domain.liquor.dto.*;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.*;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LiquorDetailService {
    private final BeerRepository beerRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final WhiskyRepository whiskyRepository;
    private final WineRepository wineRepository;
    private final FeedRepository feedRepository;
    private final ScrapRepository scrapRepository;
    private final LiquorMapper liquorMapper;
    private final SimilarBeerItemRepository similarBeerItemRepository;
    private final SimilarWineItemRepository similarWineItemRepository;
    private final SimilarWhiskyItemRepository similarWhiskyItemRepository;
    private final SimilarTraditionItemRepository similarTraditionItemRepository;
    private final SimilarCocktailItemRepository similarCocktailItemRepository;
    private final SimilarHometenderItemRepository similarHometenderItemRepository;

    /**
     * - 평점
     * - 술 이름 술
     * - 스크랩 개수 -scrap에서 조회
     * - 상세 설명 (description) 술
     * - 연관된 리뷰 (페이징) feed -
     * - 맛 태그?
     * - 비슷한 술 술-similar
     * - 술 이미지 술
     *
     * @param type 술 타입
     * @param id   술 id
     * @return 술 상세 정보
     */
    public LiquorDetailResponse getLiquorDetail(LiquorType type, Long id) {
        Long liquorId = null;
        String name = null;
        String image = null;
        Double ratingAvg = null;
        Long scrapCnt = null;
        boolean scrapped = false;
        List<String> ingredients = null;
        List<String> tastes = null;
        String description = null;
        List<ReviewListDto> reviews = null;
        List<LiquorListItemDto> similarItem = null;

        String body = null;
        String sweet = null;
        String acidity = null;
        String sour = null;
        String bitter = null;
        String salty = null;

        List<Long> list = new ArrayList<>();
        switch (type) {
            case BEER:
                Optional<Beer> byIdBeer = beerRepository.findById(id);
                if (byIdBeer.isEmpty())
                    throw new LiquorNotFoundException();
                Beer beer = byIdBeer.get();
                body = BeerTasteType.getTag("BODY", beer.getFlavor());
                String aroma = BeerTasteType.getTag("AROMA", beer.getAroma());
                Optional<SimilarBeerItem> byId = similarBeerItemRepository.findById(id);
                if (byId.isPresent()) {
                    SimilarBeerItem similarBeerItem = byId.get();
                    extracted(list, similarBeerItem.getSimilarLiquor());
                    List<Beer> byIdList = beerRepository.findByIdList(list);

                    liquorId = id;
                    name = beer.getName().trim();
                    ratingAvg = beer.getRatingAvg();
                    reviews = feedRepository.findBeerReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoBeer(byIdList);
                    description = beer.getDescription().trim();
                    image = beer.getImg();
                    tastes = Arrays.asList(body, aroma);
                }
                break;
            case WINE:
                Optional<Wine> byIdWine = wineRepository.findById(id);
                if (byIdWine.isEmpty())
                    throw new LiquorNotFoundException();

                Wine wine = byIdWine.get();
                body = WineTasteType.getTag("BODY", wine.getBody());
                acidity = WineTasteType.getTag("ACIDITY", wine.getAcidity());
                sweet = WineTasteType.getTag("SWEET", wine.getSweetness());
                tastes = Arrays.asList(body, acidity, sweet);

                Optional<SimilarWineItem> byIdWineSim = similarWineItemRepository.findById(id);
                if (byIdWineSim.isPresent()) {
                    SimilarWineItem similarWineItem = byIdWineSim.get();
                    extracted(list, similarWineItem.getSimilarLiquor());
                    List<Wine> byIdListWine = wineRepository.findByIdList(list);

                    liquorId = id;
                    name = wine.getName().trim();
                    ratingAvg = wine.getRatingAvg();
                    reviews = feedRepository.findWineReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoWine(byIdListWine);
                    description = wine.getDescription().trim();
                    image = wine.getImg();
                }
                break;
            case WHISKY:
                Optional<Whisky> byIdWhisky = whiskyRepository.findById(id);
                if (byIdWhisky.isEmpty())
                    throw new LiquorNotFoundException();
                Whisky whisky = byIdWhisky.get();
                Optional<SimilarWhiskyItem> byIdWhiskySim = similarWhiskyItemRepository.findById(id);
                if (byIdWhiskySim.isPresent()) {
                    SimilarWhiskyItem similarWhiskyItem = byIdWhiskySim.get();
                    extracted(list, similarWhiskyItem.getSimilarLiquor());
                    List<Whisky> byIdListWhisky = whiskyRepository.findByIdList(list);

                    liquorId = id;
                    name = whisky.getName().trim();
                    ratingAvg = whisky.getRatingAvg();
                    reviews = feedRepository.findWhiskyReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoWhisky(byIdListWhisky);
                    image = whisky.getImg();
                }
                break;
            case COCKTAIL:
                Optional<Cocktail> byIdCocktail = cocktailRepository.findById(id);
                if (byIdCocktail.isEmpty())
                    throw new LiquorNotFoundException();
                Cocktail cocktail = byIdCocktail.get();
                Optional<SimilarCocktailItem> byIdCocktailSim = similarCocktailItemRepository.findById(id);
                if (byIdCocktailSim.isPresent()) {
                    SimilarCocktailItem similarCocktailItem = byIdCocktailSim.get();
                    extracted(list, similarCocktailItem.getSimilarLiquor());
                    List<Cocktail> byIdListCocktail = cocktailRepository.findByIdList(list);

                    liquorId = id;
                    name = cocktail.getName().trim();
                    ratingAvg = cocktail.getRatingAvg();
                    reviews = feedRepository.findCocktailReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoCocktail(byIdListCocktail);
                    image = cocktail.getImg();
                }
                break;
            case TRADITION:
                Optional<Tradition> byIdTradition = traditionRepository.findById(id);
                if (byIdTradition.isEmpty())
                    throw new LiquorNotFoundException();
                Tradition tradition = byIdTradition.get();
                Optional<SimilarTraditionItem> byIdTraditionSim = similarTraditionItemRepository.findById(id);
                if (byIdTraditionSim.isPresent()) {
                    SimilarTraditionItem similarTraditionItem = byIdTraditionSim.get();
                    extracted(list, similarTraditionItem.getSimilarLiquor());
                    List<Tradition> repositoryByIdList = traditionRepository.findByIdList(list);

                    liquorId = id;
                    name = tradition.getName().trim();
                    ratingAvg = tradition.getRatingAvg();
                    reviews = feedRepository.findTraditionReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoTradition(repositoryByIdList);
                    image = tradition.getImg();
                }
                break;
            case HOMETENDER:
                Optional<Hometender> byIdHometender = hometenderRepository.findById(id);
                if (byIdHometender.isEmpty())
                    throw new LiquorNotFoundException();
                Hometender hometender = byIdHometender.get();
                Optional<SimilarHometenderItem> byIdHometenderSim = similarHometenderItemRepository.findById(id);
                if (byIdHometenderSim.isPresent()) {
                    SimilarHometenderItem similarHometenderItem = byIdHometenderSim.get();
                    extracted(list, similarHometenderItem.getSimilarLiquor());
                    List<Hometender> repositoryByIdList = hometenderRepository.findByIdList(list);

                    liquorId = id;
                    ingredients = liquorMapper.toRandHometender(hometender).getMaterials();
                    name = hometender.getName().trim();
                    ratingAvg = hometender.getRatingAvg();
                    reviews = feedRepository.findHometenderReviewByLiquorId(id);
                    similarItem = liquorMapper.toLiquorListDtoHometender(repositoryByIdList);
                    image = hometender.getImg();
                }
                break;
        }
        return LiquorDetailResponse.builder()
                .id(liquorId)
                .name(name)
                .image(image)
                .ratingAvg(ratingAvg)
                .scrapCnt(scrapCnt)
                .scrapped(scrapped)
                .ingredients(ingredients)
                .tastes(tastes)
                .description(description)
                .reviews(reviews)
                .similarItems(similarItem)
                .build();
    }

    private static void extracted(List<Long> list, SimilarItemValueType similarBeerItem) {
        list.add(similarBeerItem.getItem1());
        list.add(similarBeerItem.getItem2());
        list.add(similarBeerItem.getItem3());
        list.add(similarBeerItem.getItem4());
        list.add(similarBeerItem.getItem5());
    }
}
