package com.osakak.jusangnakwon.domain.liquor.dto;

import java.util.Arrays;
import java.util.function.Function;
import lombok.Getter;

@Getter
public enum HometenderTasteType {

    SWEET_HIGH("SWEET", 2, val -> val > 60 && val <= 83, "당도 높음", 70),
    SWEET_MIDDLE("SWEET", 1, val -> val >= 30 && val <= 60, "당도 보통", 45),
    SWEET_LOW("SWEET", 0, val -> val >= 0 && val < 30, "당도 낮음", 15),
    SOUR_HIGH("SOUR", 2, val -> val > 40 && val <= 50, "산도 높음", 45),
    SOUR_MIDDLE("SOUR", 1, val -> val >= 15 && val <= 40, "산도 보통", 27),
    SOUR_LOW("SOUR", 0, val -> val >= 0 && val < 15, "산도 낮음", 7),
    BITTER_HIGH("BITTER", 2, val -> val > 50 && val <= 83, "쓴맛 높음", 66),
    BITTER_MIDDLE("BITTER", 1, val -> val >= 30 && val <= 50, "쓴맛 보통", 40),
    BITTER_LOW("BITTER", 0, val -> val >= 0 && val < 30, "쓴맛 낮음", 15),
    SALTY_HIGH("SALTY", 2, val -> val > 30 && val <= 50, "짠맛 높음", 40),
    SALTY_MIDDLE("SALTY", 1, val -> val >= 20 && val <= 30, "짠맛 보통", 25),
    SALTY_LOW("SALTY", 0, val -> val >= 0 && val < 20, "짠맛 낮음", 10);

    private final String taste;
    private final int intensity;
    private final Function<Integer, Boolean> checkFunc;
    private final String tag;
    private final int val;

    HometenderTasteType(String taste, int intensity, Function<Integer, Boolean> checkFunc, String tag, int val){
        this.taste = taste;
        this.intensity = intensity;
        this.checkFunc = checkFunc;
        this.tag = tag;
        this.val = val;
    }

    public static HometenderTasteType findTasteType(String taste, int intensity){
        return Arrays.stream(HometenderTasteType.values()).filter(type -> type.taste.equals(taste))
                .filter(type -> type.intensity==intensity).findFirst().orElse(null);
    }

    public static String getTag(String taste, int val){
        HometenderTasteType t = Arrays.stream(HometenderTasteType.values()).filter(type -> type.taste.equals(taste))
                .filter(type -> type.checkFunc.apply(val)).findFirst().orElse(null);
        if(t!=null) return t.getTag();
        else return null;
    }
}
