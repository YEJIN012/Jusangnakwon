import styles from "@/pages/Feed/FeedDetail.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface Feed {
  feed: {
    id: number;
    userName: string;
    userImg: string;
    classification: string;
    img: string;
    content: string;
    liked: boolean;
  };
  setDummyFeedList: Dispatch<
    SetStateAction<
      {
        id: number;
        userName: string;
        userImg: string;
        classification: string;
        img: string;
        content: string;
        liked: boolean;
      }[]
    >
  >;
}

const FeedComponent = ({ feed, setDummyFeedList }: Feed) => {
  return (
    <>
      {/* <div>
        <div
          style={{
            backgroundImage: `url(${dummyFeedList[0].img})`,
            height: randomNum,
            position: "relative",
            borderRadius: "5px",
          }}
        >
          <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.8rem", paddingTop: "5px" }}>
            <div className={`${styles[`user-profile`]}`}>
              <img src={dummyFeedList[0].userImg} className={`${styles[`user-img`]}`}></img>
              <p>{dummyFeedList[0].userName}</p>
            </div>
          </div>
          <button
            style={{
              color: "white",
              background: "none",
              border: "none",
              position: "absolute",
              bottom: "2%",
              right: "3%",
            }}
          >
            <FavoriteBorderIcon />
          </button>
        </div>
        <div style={{ backgroundColor: "inherit", padding: "5px" }}>
          <p style={{ color: "white" }}>{dummyFeedList[0].content}</p>
        </div>
      </div> */}
      {feed.classification === "게시글" ? (
        <Grid item key={feed.id} paddingBottom={1}>
          <Card style={{ backgroundColor: "inherit" }}>
            <Link to={`../details/feed/${feed.id}`} style={{ textDecoration: "none" }}>
              <CardMedia component="img" height="150" image={feed.img} alt={feed.userName} />
            </Link>
            <CardContent style={{ backgroundColor: "#3D3D3D", padding: "2px" }}>
              <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.8rem", color: "white" }}>
                <div className={`${styles[`user-profile`]}`}>
                  <img src={feed.userImg} className={`${styles[`user-img`]}`}></img>
                  <p>{feed.userName}</p>
                </div>
                {feed.liked ? (
                  <button
                    style={{
                      color: "white",
                      background: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      setDummyFeedList((prevList) =>
                        prevList.map((prevFeed) => {
                          if (prevFeed.id === feed.id) {
                            return { ...prevFeed, liked: !prevFeed.liked };
                          } else {
                            return prevFeed;
                          }
                        }),
                      );
                      console.log(feed.liked);
                    }}
                  >
                    <FavoriteIcon></FavoriteIcon>
                  </button>
                ) : (
                  <button
                    style={{
                      color: "white",
                      background: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      setDummyFeedList((prevList) =>
                        prevList.map((prevFeed) => {
                          if (prevFeed.id === feed.id) {
                            return { ...prevFeed, liked: !prevFeed.liked };
                          } else {
                            return prevFeed;
                          }
                        }),
                      );
                      console.log(feed.liked);
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
        </Grid>
      ) : (
        <Grid item key={feed.id} paddingBottom={1}>
          <Link to={`../details/feed/${feed.id}`} style={{ textDecoration: "none" }}>
            <Card style={{ backgroundColor: "inherit" }}>
              <Link to={`../details/feed/${feed.id}`} style={{ textDecoration: "none" }}></Link>
              <CardContent style={{ backgroundColor: "#3D3D3D", padding: "2px" }}>
                <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.8rem", color: "white" }}>
                  <div className={`${styles[`user-profile`]}`}>
                    <img src={feed.userImg} className={`${styles[`user-img`]}`}></img>
                    <p>{feed.userName}</p>
                  </div>
                  {feed.liked ? (
                    <button
                      style={{
                        color: "white",
                        background: "none",
                        border: "none",
                      }}
                      onClick={() => {
                        setDummyFeedList((prevList) =>
                          prevList.map((prevFeed) => {
                            if (prevFeed.id === feed.id) {
                              return { ...prevFeed, liked: !prevFeed.liked };
                            } else {
                              return prevFeed;
                            }
                          }),
                        );
                        console.log(feed.liked);
                      }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </button>
                  ) : (
                    <button
                      style={{
                        color: "white",
                        background: "none",
                        border: "none",
                      }}
                      onClick={() => {
                        setDummyFeedList((prevList) =>
                          prevList.map((prevFeed) => {
                            if (prevFeed.id === feed.id) {
                              return { ...prevFeed, liked: !prevFeed.liked };
                            } else {
                              return prevFeed;
                            }
                          }),
                        );
                        console.log(feed.liked);
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
          </Link>
        </Grid>
      )}
    </>
  );
};

export default FeedComponent;
