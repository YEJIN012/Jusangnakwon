package com.osakak.jusangnakwon.domain.liquor.dto;

import java.util.Arrays;
import java.util.function.Function;
import lombok.Getter;

@Getter
public enum TraditionTasteType {

    SWEET_HIGH("SWEET", val -> val > 2.9 && val <= 5, "당도 높음"),
    SWEET_MIDDLE("SWEET", val -> val >= 2 && val <= 2.9, "당도 보통"),
    SWEET_LOW("SWEET", val -> val >= 0 && val < 2, "당도 낮음"),
    ACIDITY_HIGH("ACIDITY", val -> val >= 3 && val <= 5, "산도 높음"),
    ACIDITY_MIDDLE("ACIDITY", val -> val >= 1.5 && val < 3, "산도 보통"),
    ACIDITY_LOW("ACIDITY", val -> val >= 0 && val < 1.5, "산도 낮음"),
    BODY_HIGH("BODY", val -> val > 3.5 && val <= 5, "바디감 높음"),
    BODY_MIDDLE("BODY", val -> val >= 2.5 && val <= 3.5, "바디감 보통"),
    BODY_LOW("BODY", val -> val >= 0 && val < 2.5, "바디감 낮음");

    private final String taste;
    private final Function<Double, Boolean> checkFunc;
    private final String tag;

    TraditionTasteType(String taste, Function<Double, Boolean> checkFunc, String tag){
        this.taste = taste;
        this.checkFunc = checkFunc;
        this.tag = tag;
    }

    public static String getTag(String taste, double val){
        TraditionTasteType t = Arrays.stream(TraditionTasteType.values()).filter(type -> type.taste.equals(taste))
                .filter(type -> type.checkFunc.apply(val)).findFirst().orElse(null);
        if(t!=null) return t.getTag();
        else return null;
    }
}
