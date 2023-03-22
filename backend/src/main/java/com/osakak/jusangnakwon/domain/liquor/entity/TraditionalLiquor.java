package com.osakak.jusangnakwon.domain.liquor.entity;

import io.swagger.annotations.ApiModel;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@ApiModel(value = "tradition")
@Document(collection = "tradition")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(builderMethodName = "TraditionalBuilder")
public class TraditionalLiquor {
    private String name;
    private int price;
    private int alcohol;
    private int size;
    private String materials;
    private String brewery;
    // desc: 술 설명
    private String desc;
    private int sweetness;
    private int acidity;
    private int freshness;
    private int body;
    private List<String> similar_liquor;
    private int scrap_cnt;
    // ScrapUser 를 객체로 사용
    private Object scrap_users;
    // RatingUser를 객체로 사용
    private Object ratings;
    private Double rating_avg;
    private List<String> feed_id;

}
