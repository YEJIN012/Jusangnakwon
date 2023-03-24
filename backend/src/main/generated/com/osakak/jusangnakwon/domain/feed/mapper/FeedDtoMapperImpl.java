package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.api.request.WriteFeedRequest;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-24T17:55:03+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16.1 (Oracle Corporation)"
)
public class FeedDtoMapperImpl implements FeedDtoMapper {

    @Override
    public FeedDto writeFeedRequestToFeedDto(WriteFeedRequest writeFeedRequest) {
        if ( writeFeedRequest == null ) {
            return null;
        }

        FeedDto.FeedDtoBuilder feedDto = FeedDto.builder();

        feedDto.type( writeFeedRequest.getType() );
        feedDto.img( writeFeedRequest.getImg() );
        feedDto.title( writeFeedRequest.getTitle() );
        feedDto.liquorType( writeFeedRequest.getLiquorType() );
        feedDto.liquorName( writeFeedRequest.getLiquorName() );
        feedDto.content( writeFeedRequest.getContent() );
        feedDto.isPublic( writeFeedRequest.getIsPublic() );

        return feedDto.build();
    }

    @Override
    public RatingDto writeFeedRequestToRatingDto(WriteFeedRequest writeFeedRequest) {
        if ( writeFeedRequest == null ) {
            return null;
        }

        RatingDto.RatingDtoBuilder ratingDto = RatingDto.builder();

        ratingDto.score( writeFeedRequest.getRatingScore() );
        ratingDto.liquorType( writeFeedRequest.getLiquorType() );
        ratingDto.liquorName( writeFeedRequest.getLiquorName() );

        return ratingDto.build();
    }
}
