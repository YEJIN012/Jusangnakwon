package com.osakak.jusangnakwon.domain.liquor.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@ApiModel(value = "cocktail")
@Document(collection = "cocktail")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(builderMethodName = "CocktailBuilder")
@Schema(description = "칵테일 테이블")
public class Cocktail {
    @Schema(description = "칵테일 이름")
    private String name;
    private String img;
    private int alcohol;
    private String type;
    private String base_wine;
    private int base_wine_amt;
    private String liquor;
    private int liquor_amt;
    private String juice;
    private int juice_amt;
    private String spice;
    private int spice_amt;
    private String soda;
    private int soda_amt;
    private String others;
    private int salty;
    private int savory;
    private int sour;
    private int bitter;
    private int sweet;
    private int spicy;
    private List<String> similar_liquor;
    private int scrap_cnt;
    // ScrapUser 를 객체로 사용
    private Object scrap_users;
    // RatingUser를 객체로 사용
    private Object ratings;
    private int rating_avg;
    private List<String> feed_id;

   /* public static CocktailBuilder builder(Cocktail cocktail) {
        return CocktailBuilder()
                .name(cocktail.getName())
                .img(cocktail.getImg())
                .alcohol(cocktail.getAlcohol())
                .type(cocktail.getType())
                .base_wine(cocktail.getBase_wine())
                .liquor(cocktail.getLiquor())
                .liquor_amt(cocktail.getLiquor_amt())
                .juice(cocktail.getJuice())
                .juice_amt(cocktail.getJuice_amt())
                .spice(cocktail.getSpice())
                .spice_amt(cocktail.getSpice_amt())
                .soda(cocktail.getSoda())
                .soda_amt(cocktail.getSoda_amt())
                .others(cocktail.getOthers())
                .salty(cocktail.getSalty())
                .savory(cocktail.getSavory())
                .sour(cocktail.getSour())
                .bitter(cocktail.getBitter())
                .sweet(cocktail.getSweet())
                .spicy(cocktail.getSpicy())
                .similar_liquor(cocktail.getSimilar_liquor())
                .scrap_cnt(cocktail.getScrap_cnt())
                .scrap_users(cocktail.getScrap_users())
                .rating_avg(cocktail.getRating_avg())
                .ratings(cocktail.getRatings())
                .feed_id(cocktail.getFeed_id());
    }*/


}
