import styles from "@/pages/Commons/FeedDetail/FeedDetail.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FeedContent } from "@/pages/Feed/FeedMain";
import { apiCreateLike } from "@/api/feed";
import LikeButton from "./LikeButton/LikeButton";
import { apiGetFilteredFeedList } from "@/api/feed";

interface Feed {
  feed: FeedContent;
  setFeedList: React.Dispatch<React.SetStateAction<FeedContent[]>>;
  focusedPostList: string;
}

const FeedItem = ({ feed, setFeedList, focusedPostList }: Feed) => {
  const updateLike = () => {
    const likeData = feed.liked;
    apiCreateLike(Number(feed.id), { isLiked: !likeData })
      .then((r) => {
        apiGetFilteredFeedList({ type: focusedPostList, page: 0 })
          .then((r) => {
            // console.log(r);
            setFeedList(r?.data.body.content);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        console.log("안됨");
      });
  };
  // console.log(feed);
  return (
    <>
      {feed.type === "리뷰글" ? (
        <Card style={{ backgroundColor: "inherit", boxShadow: "0px 0px 2px gray" }}>
          <Link to={`../details/feed/${feed.id}`}>
            {feed.img ? <CardMedia component="img" height="auto" image={feed.img} alt={feed.writer.username} /> : <></>}
          </Link>
          <CardContent style={{ backgroundColor: `inherit`, padding: "2%" }}>
            <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.9rem", color: "white" }}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.writer.username}</p>
              </div>
              {/* {feed.liked ? (
                <button
                  style={{
                    color: "white",
                    background: "none",
                    border: "none",
                  }}
                  onClick={() => {
                    setFeedList((prevList) =>
                      prevList.map((prevFeed) => {
                        if (prevFeed.id === feed.id) {
                          return { ...prevFeed, liked: !prevFeed.liked };
                        } else {
                          return prevFeed;
                        }
                      }),
                    );
                  }}
                >
                  <FavoriteIcon sx={{ color: "red" }}/>
                </button>
              ) : (
                <button
                  style={{
                    color: "white",
                    background: "none",
                    border: "none",
                  }}
                  onClick={() => {
                    setFeedList((prevList) =>
                      prevList.map((prevFeed) => {
                        if (prevFeed.id === feed.id) {
                          return { ...prevFeed, liked: !prevFeed.liked };
                        } else {
                          return prevFeed;
                        }
                      }),
                    );
                  }}
                >
                  <FavoriteBorderIcon />
                </button>
              )} */}
              {/* {feed.liked ? ( */}
              <button onClick={updateLike} style={{ background: "none", border: "none" }}>
                {feed.liked ? (
                  <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                ) : (
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                )}
              </button>
              {/* ) : ( */}
              {/* <button onClick={updateLike} style={{ background: "none", border: "none" }}> */}
              {/* <FavoriteBorderIcon sx={{ color: "white" }} /> */}
              {/* </button> */}
              {/* )} */}
            </div>
            <Link to={`../details/feed/${feed.id}`}>
              <Typography variant="body2" color="white" style={{ padding: "3% 5%" }}>
                {feed.content}
              </Typography>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card style={{ backgroundColor: "inherit" }}>
          <CardContent style={{ backgroundColor: "rgba(50, 50, 55, 0.9)", padding: "2px" }}>
            <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.8rem", color: "white" }}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.writer.username}</p>
              </div>
              {feed.liked ? (
                <button onClick={updateLike} style={{ background: "none", border: "none" }}>
                  <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                </button>
              ) : (
                <button onClick={updateLike} style={{ background: "none", border: "none" }}>
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                </button>
              )}
            </div>
            <Link to={`../details/feed/${feed.id}`}>
              <Typography variant="body2" color="white" style={{ padding: "3% 5%" }}>
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
