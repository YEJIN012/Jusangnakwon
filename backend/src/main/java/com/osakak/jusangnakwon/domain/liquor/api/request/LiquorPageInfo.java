package com.osakak.jusangnakwon.domain.liquor.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class LiquorPageInfo {
    private int page;
    private int perPage;

    public LiquorPageInfo(int page, int perPage) {
        this.page = page;
        this.perPage = perPage;
    }
}
