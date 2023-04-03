package com.osakak.jusangnakwon.domain.liquor.dto;

import java.util.Arrays;
import java.util.function.Function;
import lombok.Getter;

@Getter
public enum WhiskyTasteType {

    BODY_HIGH("BODY", val -> val >= 0 && val <= 1, "바디감 높음"),
    BODY_MIDDLE("BODY", val -> val > -1 && val < 0, "바디감 보통"),
    BODY_LOW("BODY", val -> val > -3 && val <= -1, "바디감 낮음"),
    SWEET_HIGH("SWEET", val -> val > 0.5 && val <= 1, "당도 높음"),
    SWEET_MIDDLE("SWEET", val -> val > -1 && val <= 0.5, "당도 보통"),
    SWEET_LOW("SWEET", val -> val > -3 && val <= -1, "당도 낮음");

    private final String taste;
    private final Function<Double, Boolean> checkFunc;
    private final String tag;

    WhiskyTasteType(String taste, Function<Double, Boolean> checkFunc, String tag){
        this.taste = taste;
        this.checkFunc = checkFunc;
        this.tag = tag;
    }

    public static String getTag(String taste, double val){
        WhiskyTasteType t = Arrays.stream(WhiskyTasteType.values()).filter(type -> type.taste.equals(taste))
                .filter(type -> type.checkFunc.apply(val)).findFirst().orElse(null);
        if(t!=null) return t.getTag();
        else return null;
    }
}
