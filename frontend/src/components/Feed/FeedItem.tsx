import styles from "@/pages/Commons/FeedDetail/FeedDetail.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FeedContent } from "@/pages/Feed/FeedMain";

interface Feed {
  feed: FeedContent;
  setFeedList: React.Dispatch<React.SetStateAction<FeedContent[]>>
}

const FeedItem = ({ feed, setFeedList }: Feed) => {
  return (
    <>
      {feed.type === "게시글" ? (
        <Card style={{ backgroundColor: "inherit", boxShadow: "0px 0px 2px gray" }}>
          <Link to={`../details/feed/${feed.id}`}>
            <CardMedia component="img" height="auto" image={feed.img} alt={feed.writer.username} />
          </Link>
          <CardContent style={{ backgroundColor: `inherit`, padding: "2%" }}>
            <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.9rem", color: "white" }}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.writer.username}</p>
              </div>
              {feed.liked ? (
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
                  <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
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
              )}
            </div>
            <Typography variant="body2" color="white" style={{ padding: "3% 5%" }}>
              {feed.content}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card style={{ backgroundColor: "inherit" }}>
          <Link to={`../details/feed/${feed.id}`}>
            <CardContent style={{ backgroundColor: "rgba(50, 50, 55, 0.9)", padding: "2px" }}>
              <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.8rem", color: "white" }}>
                <div className={`${styles[`user-profile`]}`}>
                <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.writer.username}</p>
                </div>
                {feed.liked ? (
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
                      // console.log(feed.liked);
                    }}
                  >
                    <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
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
                      // console.log(feed.liked);
                    }}
                  >
                    <FavoriteBorderIcon />
                  </button>
                )}
              </div>
              <Typography variant="body2" color="white" style={{ padding: "3% 5%" }}>
                {feed.content}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      )}
    </>
  );
};

export default FeedItem;
