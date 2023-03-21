package com.osakak.jusangnakwon.domain.liquor.api.response;

import java.util.List;

public class LiquorResponse {
    private String name;
    private Object liquor;
    private List<String> similar_liquor;
    private int scrap_cnt;
    // ScrapUser 를 객체로 사용
    private Object scrap_users;
    // RatingUser를 객체로 사용
    private Object ratings;
    private int rating_avg;
    private List<String> feed_id;
}
