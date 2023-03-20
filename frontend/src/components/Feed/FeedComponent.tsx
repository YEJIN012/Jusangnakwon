import styles from "@/pages/Feed/FeedDetail.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Feed {
  id: number;
  userName: string;
  userImg: string;
  classification: string;
  img: string;
  content: string;
}

const FeedComponent = ({ feed }: { feed: Feed }) => {
  //   const min = 80;
  //   const max = 250;
  //   const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  const dummyFeedList = [
    {
      id: 1,
      userName: "hojung",
      userImg: "https://picsum.photos/30/30/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "이야호",
    },
    {
      id: 2,
      userName: "이담비",
      userImg: "https://picsum.photos/30/30/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "와인 추천해주세요!!!",
    },
    {
      id: 3,
      userName: "스텝한이",
      userImg: "https://picsum.photos/30/30/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "부야호",
    },
  ];
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
        <Card>
          <Link to={`/feed/${feed.id}`} style={{ textDecoration: "none" }}>
            <CardMedia component="img" height="150" image={feed.img} alt={feed.userName} />
          </Link>
          <CardContent style={{ backgroundColor: "#06031a", padding: "2px" }}>
            <div className={`${styles[`user-profile-container`]}`} style={{ fontSize: "0.8rem", color: "white" }}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.userImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.userName}</p>
              </div>
              <button
                style={{
                  color: "white",
                  background: "none",
                  border: "none",
                }}
              >
                <FavoriteBorderIcon />
              </button>
            </div>
            <Typography variant="body2" color="white">
              {feed.content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default FeedComponent;
