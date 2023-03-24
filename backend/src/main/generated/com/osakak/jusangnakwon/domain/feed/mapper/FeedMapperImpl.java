package com.osakak.jusangnakwon.domain.feed.mapper;

import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.dto.WriterDto;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.user.entity.User;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-24T17:55:02+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16.1 (Oracle Corporation)"
)
public class FeedMapperImpl implements FeedMapper {

    @Override
    public Feed feedDtoToFeed(FeedDto feedDto, User user) {
        if ( feedDto == null && user == null ) {
            return null;
        }

        Feed.FeedBuilder feed = Feed.builder();

        if ( feedDto != null ) {
            feed.type( feedDto.getType() );
            feed.img( feedDto.getImg() );
            feed.title( feedDto.getTitle() );
            feed.liquorType( feedDto.getLiquorType() );
            feed.liquorName( feedDto.getLiquorName() );
            feed.content( feedDto.getContent() );
            feed.isPublic( feedDto.getIsPublic() );
        }
        feed.user( user );

        return feed.build();
    }

    @Override
    public Rating ratingDtoToRating(RatingDto ratingDto, User user) {
        if ( ratingDto == null && user == null ) {
            return null;
        }

        Rating.RatingBuilder rating = Rating.builder();

        if ( ratingDto != null ) {
            rating.liquorType( ratingDto.getLiquorType() );
            rating.liquorName( ratingDto.getLiquorName() );
            rating.score( ratingDto.getScore() );
        }
        rating.user( user );

        return rating.build();
    }

    @Override
    public FeedDto feedToFeedDto(Feed feed) {
        if ( feed == null ) {
            return null;
        }

        FeedDto.FeedDtoBuilder feedDto = FeedDto.builder();

        feedDto.writer( userToWriterDto( feed.getUser() ) );
        feedDto.id( feed.getId() );
        feedDto.type( feed.getType() );
        feedDto.img( feed.getImg() );
        feedDto.title( feed.getTitle() );
        feedDto.liquorType( feed.getLiquorType() );
        feedDto.liquorName( feed.getLiquorName() );
        feedDto.content( feed.getContent() );
        feedDto.isPublic( feed.getIsPublic() );

        return feedDto.build();
    }

    protected WriterDto userToWriterDto(User user) {
        if ( user == null ) {
            return null;
        }

        WriterDto.WriterDtoBuilder writerDto = WriterDto.builder();

        writerDto.username( user.getUsername() );
        writerDto.profileImg( user.getProfileImageUrl() );

        return writerDto.build();
    }
}
