package com.osakak.jusangnakwon.domain.liquor.entity;

import io.swagger.annotations.ApiModel;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@ApiModel(value = "wine")
@Document(collection = "wine")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(builderMethodName = "WineBuilder")
public class Wine {
    @Id
    private String id;
    private String name;
    private int price;
    private String img;
    private String link;
    private int alcohol;
    private String type;
    private String country;
    private String winery;
    private String province;
    private String grape_type;
    private String food_pairing;
    private String vintage;
    private int size;
    private String desc;
    private int sweetness;
    private int acidity;
    private int body;
    private int tannin;
    private List<String> similar_liquor;
    private int scrap_cnt;
    // ScrapUser 를 객체로 사용
    private Object scrap_users;
    // RatingUser를 객체로 사용
    private Object ratings;
    private int rating_avg;
    private List<String> feed_id;
}
