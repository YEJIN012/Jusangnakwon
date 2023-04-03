package com.osakak.jusangnakwon.domain.liquor.dto;

import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
public class HometenderTasteDto implements TasteDto {

    private final int bitter;
    private final int salty;
    private final int sour;
    private final int sweet;

    @Builder
    public HometenderTasteDto(int bitter, int salty, int sour, int sweet) {
        this.bitter = bitter;
        this.salty = salty;
        this.sour = sour;
        this.sweet = sweet;
    }

    @Override
    public List<String> toTagList() {
        List<String> list = new ArrayList<>();
        list.add(HometenderTasteType.getTag("SWEET", this.sweet));
        list.add(HometenderTasteType.getTag("SOUR", this.sour));
        return list;
    }
}
