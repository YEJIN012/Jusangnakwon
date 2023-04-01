package com.osakak.jusangnakwon.domain.liquor.api.request;

import com.osakak.jusangnakwon.domain.feed.dto.TagDto;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HometenderRequest {

    private String img;
    private String name;
    private List<TagDto> ingredients;
    private List<TagDto> tastes;
    private String description;


}
