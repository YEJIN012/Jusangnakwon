package com.osakak.jusangnakwon.domain.liquor.api.request;

import com.osakak.jusangnakwon.domain.liquor.dto.HometenderTasteDto;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HometenderRequest {

    private String image;
    private String name;
    private List<String> ingredients;
    private HometenderTasteDto taste;
    private String description;

    public void setTaste(HometenderTasteDto taste) {
        this.taste = taste;
    }
}
