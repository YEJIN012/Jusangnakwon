package com.osakak.jusangnakwon.domain.liquor.api.request;

import com.osakak.jusangnakwon.domain.liquor.dto.HometenderTasteDto;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
public class HometenderRequest {

    private String name;
    private List<String> ingredients;
    private HometenderTasteDto taste;
    private String description;

    public void setTaste(HometenderTasteDto taste) {
        this.taste = taste;
    }
}
