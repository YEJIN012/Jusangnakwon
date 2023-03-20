package com.osakak.jusangnakwon.domain.liquor.entity;

import io.swagger.annotations.ApiModel;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@ApiModel(value = "hometender")
@Document(collection = "hometender")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(builderMethodName = "HomeTenderBuilder")
public class Hometender {
    private String name;
    private String img;
    private List<String> materials;
    private String desc;
    private int salty;
    private int sour;
    private int bitter;
    private int sweet;
    private List<String> similar_liquor;
    private int scrap_cnt;
    private Object scrap_users;
    private Object ratings;
    private int rating_avg;
    private List<String> feed_id;
    private String user_id;


}
