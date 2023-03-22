package com.osakak.jusangnakwon.domain.liquor.entity;

import io.swagger.annotations.ApiModel;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@ApiModel(value = "whisky")
@Document(collection = "whisky")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(builderMethodName = "WhiskyBuilder")
public class Whisky {
    private String name;
    private int price;
    private String img;
    private String link;
    private int alcohol;
    // 평점
    private int meta_critic;
    private int body;
    private int sweet;
    private int sherry;
    private int malt;
    private int aperitif;
    private int smoky;
    private int pungent;
    private int fruity;
    private int honey;
    private int floral;
    private int spicy;
    private int medicinal;
    private int nutty;
    private int winey;
    private List<String> similar_liquor;
    private int scrap_cnt;
    // ScrapUser 를 객체로 사용
    private Object scrap_users;
    // RatingUser를 객체로 사용
    private Object ratings;
    private Double rating_avg;
    private List<String> feed_id;
}
