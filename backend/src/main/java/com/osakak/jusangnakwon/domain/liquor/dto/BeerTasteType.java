package com.osakak.jusangnakwon.domain.liquor.dto;

import java.util.Arrays;
import java.util.function.Function;
import lombok.Getter;

@Getter
public enum BeerTasteType {

    BODY_HIGH("BODY", val -> val > 12 && val <= 18, "바디감 높음"),
    BODY_MIDDLE("BODY", val -> val >= 9 && val <= 12, "바디감 보통"),
    BODY_LOW("BODY", val -> val >= 0 && val < 9, "바디감 낮음"),
    AROMA_HIGH("AROMA", val -> val > 3.2 && val <= 5, "아로마 강함"),
    AROMA_MIDDLE("AROMA", val -> val >= 2.6 && val <= 3.2, "아로마 보통"),
    AROMA_LOW("AROMA", val -> val >= 0 && val < 2.6, "아로마 약함");

    private final String taste;
    private final Function<Double, Boolean> checkFunc;
    private final String tag;

    BeerTasteType(String taste, Function<Double, Boolean> checkFunc, String tag){
        this.taste = taste;
        this.checkFunc = checkFunc;
        this.tag = tag;
    }

    public static String getTag(String taste, double val){
        BeerTasteType t = Arrays.stream(BeerTasteType.values()).filter(type -> type.taste.equals(taste))
                .filter(type -> type.checkFunc.apply(val)).findFirst().orElse(null);
        if(t!=null) return t.getTag();
        else return null;
    }
}
