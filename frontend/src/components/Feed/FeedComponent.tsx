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
  //   const min = 80;
  //   const max = 250;
  //   const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

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
      <Grid item xs={6} md={6} lg={4} key={feed.id}>
        <Card style={{ backgroundColor: "inherit" }}>
          <Link to={`/feed/${feed.id}`} style={{ textDecoration: "none" }}>
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
    </>
  );
};

export default FeedComponent;
