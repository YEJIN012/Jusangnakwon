package com.osakak.jusangnakwon.domain.liquor.dto;

import java.util.Arrays;
import java.util.function.Function;
import lombok.Getter;

@Getter
public enum CocktailTasteType {

    SWEET_HIGH("SWEET", val -> val > 50 && val <= 83, "당도 높음"),
    SWEET_MIDDLE("SWEET", val -> val >= 40 && val <= 50, "당도 보통"),
    SWEET_LOW("SWEET", val -> val >= 0 && val < 40, "당도 낮음"),
    SOUR_HIGH("SOUR", val -> val > 68 && val <= 83, "산도 높음"),
    SOUR_MIDDLE("SOUR", val -> val >= 20 && val <= 68, "산도 보통"),
    SOUR_LOW("SOUR", val -> val >= 0 && val < 20, "산도 낮음");

    private final String taste;
    private final Function<Integer, Boolean> checkFunc;
    private final String tag;

    CocktailTasteType(String taste, Function<Integer, Boolean> checkFunc, String tag){
        this.taste = taste;
        this.checkFunc = checkFunc;
        this.tag = tag;
    }

    public static String getTag(String taste, int val){
        CocktailTasteType t = Arrays.stream(CocktailTasteType.values()).filter(type -> type.taste.equals(taste))
                .filter(type -> type.checkFunc.apply(val)).findFirst().orElse(null);
        if(t!=null) return t.getTag();
        else return null;
    }
}
