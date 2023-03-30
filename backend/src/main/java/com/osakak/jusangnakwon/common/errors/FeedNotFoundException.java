package com.osakak.jusangnakwon.common.errors;

public class FeedNotFoundException extends RuntimeException {

    public FeedNotFoundException(Long id) {
        super("Feed not found: " + id);
    }
}