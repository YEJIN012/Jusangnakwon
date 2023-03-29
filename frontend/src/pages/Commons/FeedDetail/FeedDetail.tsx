import styles from "./FeedDetail.module.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Menu, MenuItem, Rating, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentList from "@/components/Feed/CommentList";
import ReadMore from "@/components/Commons/ReadMore/ReadMore";
import CommentIcon from "@mui/icons-material/Comment";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LikeButton from "@/components/Feed/LikeButton/LikeButton";
const FeedDetail = () => {
  const { id } = useParams();
  const [dummyFeedList, setDummyFeedList] = useState([
    {
      id: 1,
      userName: "hojung",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "이야호",
      liked: false,
    },
    {
      id: 2,
      userName: "이담비",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "와인 추천해주세요!!!",
      liked: false,
    },
    {
      id: 3,
      userName: "동동이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "저는 칵테일 추천해주세요 ~~ !",
      liked: false,
    },
    {
      id: 4,
      userName: "스텝한이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "부야호",
      liked: false,
    },
    {
      id: 5,
      userName: "스텝한이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "부야호오오오",
      liked: false,
    },
    {
      id: 6,
      userName: "이랑이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "냠냠 와인 냠냠",
      liked: false,
    },
    {
      id: 7,
      userName: "주연이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "위스키랑 같이 먹을 안주 추천해주세요오오오오오오옹오오오오오오오오오오오",
      liked: false,
    },
  ]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {dummyFeedList
        .filter((feed) => feed.id === Number(id))
        .map((feed) => (
          <div key={feed.id}>
            <div className={`${styles[`user-profile-container`]}`}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.userImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.userName}</p>
              </div>
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ minWidth: "0", color: "white" }}
                >
                  <MoreVertIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    position: "absolute",
                    "& .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
                      right: 0,
                    },
                    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  {/* <Link to="../write/review">
                    <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                      수정하기
                    </MenuItem>
                  </Link> */}
                  <MenuItem onClick={handleClose}>삭제하기</MenuItem>
                </Menu>
              </div>
            </div>
            <img src={feed.img} className={`${styles[`feed-img`]}`}></img>

            <div className={`${styles[`feed-content-container`]}`}>
              <ReadMore content={feed.content}></ReadMore>
              {/* <div className={`${styles[`feed-stars-like`]}`}>
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
                      setDummyFeedList((prevList) =>
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
              </div> */}
              <LikeButton></LikeButton>
            </div>
            {feed.classification === "게시글" ? (
              <div className={`${styles[`feed-alcohol-info-container`]}`}>
                {/* <p>주종</p> */}
                <p className={`${styles[`feed-alcohol-type-tag`]}`} style={{ marginLeft: "5%" }}>
                  와인
                </p>
                {/* <p>술 이름</p> */}
                <p>소비뇽</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
                  {feed.classification === "게시글" ? <Rating name="read-only" value={5} readOnly /> : null}
                  <p style={{ fontSize: "0.7rem", color: "gray" }}>{feed.userName}님의 평점</p>
                </div>
              </div>
            ) : null}
            <div className={`${styles[`comment-input-container`]}`}>
              <ChatBubbleOutlineIcon sx={{ color: "white" }}></ChatBubbleOutlineIcon>
              <input className={`${styles[`comment-input`]}`} placeholder="댓글을 입력해주세요..."></input>
            </div>
            <CommentList></CommentList>
          </div>
        ))}
    </div>
  );
};

export default FeedDetail;
