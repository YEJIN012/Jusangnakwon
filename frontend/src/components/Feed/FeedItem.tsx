import styles from "@/pages/Commons/FeedDetail/FeedDetail.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FeedContent } from "@/pages/Feed/FeedMain";
import { apiCreateLike, apiGetFilteredFeedList } from "@/api/feed";
import LikeButton from "./LikeButton/LikeButton";
import { useState } from "react";
interface Feed {
  feed: FeedContent;
  setFeedList: React.Dispatch<React.SetStateAction<FeedContent[]>>;
  focusedPostList: string;
  curPageNumber: number;
}

const FeedItem = ({ feed, setFeedList, focusedPostList, curPageNumber }: Feed) => {
  const [liked, setLiked] = useState(feed.liked);
  const updateLike = () => {
    // const likeData = feed.liked;
    apiCreateLike(Number(feed.id), { isLiked: !liked })
      .then((r) => {
        // console.log(feed);

        // console.log(r);
        setLiked(!liked);
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  // console.log(feed);
  return (
    <>
      {feed.type === "리뷰글" ? (
        // 리뷰글
        <Card
          style={{
            backgroundColor: "inherit",
            boxShadow: "0px 0px 2px gray",
            fontFamily: "LINESeedKR-Bd",
            fontSize: "1rem",
          }}
        >
          <Link to={`../details/feed/${feed.id}`}>
            {feed.img ? <CardMedia component="img" height="auto" image={feed.img} alt={feed.writer.username} /> : <></>}
          </Link>
          <CardContent style={{ backgroundColor: `inherit`, padding: "2%", fontFamily: "LINESeedKR-Bd" }}>
            <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.9rem", color: "white" }}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.writer.username}</p>
              </div>
              <button onClick={updateLike} style={{ background: "none", border: "none" }}>
                {liked ? (
                  <FavoriteIcon sx={{ color: "#C63B51" }}></FavoriteIcon>
                ) : (
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                )}
              </button>
            </div>
            <Link to={`../details/feed/${feed.id}`}>
              <Typography variant="body2" color="white" style={{ padding: "3% 5%" }}>
                {feed.content}
              </Typography>
            </Link>
          </CardContent>
        </Card>
      ) : (
        // 질문글
        <Card style={{ backgroundColor: "inherit", fontFamily: "LINESeedKR-Bd" }}>
          <Link to={`../details/feed/${feed.id}`}>
            {feed.img ? <CardMedia component="img" height="auto" image={feed.img} alt={feed.writer.username} /> : <></>}
          </Link>
          <CardContent style={{ backgroundColor: "rgba(50, 50, 55, 0.9)", padding: "2px" }}>
            <div
              className={`${styles[`user-profile-container`]}`}
              style={{ fontSize: "0.9rem", color: "white", fontFamily: "LINESeedKR-Bd" }}
            >
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.writer.username}</p>
              </div>
              <button onClick={updateLike} style={{ background: "none", border: "none" }}>
                {liked ? (
                  <FavoriteIcon sx={{ color: "#C63B51" }}></FavoriteIcon>
                ) : (
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                )}
              </button>
            </div>
            <Link to={`../details/feed/${feed.id}`}>
              <Typography variant="body2" color="white" style={{ padding: "3% 5%", fontFamily: "" }}>
                {feed.title}
              </Typography>
            </Link>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FeedItem;
