import styles from "./FeedDetail.module.css";
import { useState, useEffect, useRef } from "react";
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
import HeaderBack from "@/components/Commons/Header/HeaderBack";
import { QuestionFormData } from "@/pages/Commons/Write/WriteQuestion";
import { ReviewFormData } from "@/pages/Commons/Write/WriteReview";
import { FeedContent } from "@/pages/Feed/FeedMain";
import { apiGetFeedDetail, apiCreateLike, apiCreateComment } from "@/api/feed";
import CommentItem from "@/components/Feed/CommentItem";

export interface Comment {
  id: number;
  writer: {
    username: string;
    profileImg: string;
  };
  feedId: number;
  content: string;
  dateCreated: Date;
}

interface FeedDetailContent extends FeedContent {
  liquorId: number | null;
  liquorType: string | null;
  liquorName: string | null;
  ratingScore: number | null;
  comments: Comment[];
}

interface CommentFormData {
  feedId: number;
  content: string;
}

const FeedDetail = () => {
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
  const { id } = useParams();
  const [feed, setFeed] = useState<FeedDetailContent | null>(null);
  // const [liked, setLiked] = useState(feed?.liked);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [formData, setFormData] = useState<CommentFormData>({
    feedId: Number(id),
    content: "",
  });

  useEffect(() => {
    apiGetFeedDetail(Number(id))
      .then((r) => {
        // console.log(r);
        setFeed(r?.data.body);
      })
      .catch((e) => console.log(e));
  }, []);

  const getFeedDetail = () => {
    apiGetFeedDetail(Number(id))
      .then((r) => {
        // console.log(r);
        setFeed(r?.data.body);
      })
      .catch((e) => console.log(e));
  };
  // const handleSubmit = () => {
  //   if (formData.content != "") {
  //     apiCreateComment(formData)
  //       .then((r) => {
  //         console.log(r);
  //         getFeedDetail();
  //         setFormData({ ...formData, content: "" });
  //         inputRef.current.value = "";
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // };

  const { content } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.content != "") {
      apiCreateComment(formData)
        .then((r) => {
          // console.log(r);
          getFeedDetail();
          setFormData({ feedId: Number(id), content: "" });
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
      <HeaderBack></HeaderBack>
      {feed && (
        <div key={feed.id}>
          <div className={`${styles[`user-profile-container`]}`}>
            <div className={`${styles[`user-profile`]}`}>
              <img src={feed.writer.profileImg} className={`${styles[`user-img`]}`}></img>
              <p>{feed.writer.username}</p>
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
<<<<<<< Updated upstream
=======
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
                <p className={`${styles[`feed-alcohol-name`]}`}>소비뇽</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
                  {feed.classification === "게시글" ? <Rating name="read-only" value={5} readOnly /> : null}
                  <p style={{ fontSize: "0.7rem", color: "gray" }}>{feed.userName}님의 평점</p>
                </div>
              </div>
            ) : null}
            <div className={`${styles[`comment-input-container`]}`}>
              <ChatBubbleOutlineIcon sx={{ color: "white" }}/>
              <input className={`${styles[`comment-input`]}`} placeholder="댓글을 입력해주세요..."></input>
            </div>
            <CommentList></CommentList>
>>>>>>> Stashed changes
          </div>
          <img src={feed.img} className={`${styles[`feed-img`]}`}></img>
          <h2 style={{ marginLeft: "3%" }}>{feed.title}</h2>
          <div className={`${styles[`feed-content-container`]}`}>
            <ReadMore content={feed.content}></ReadMore>
            <div className={`${styles[`feed-stars-like`]}`}>
              {feed.liked ? (
                <button
                  onClick={() => {
                    apiCreateLike(Number(id), { isLiked: "false" });
                  }}
                  style={{ background: "none", border: "none" }}
                >
                  <LikeButton isLiked={feed.liked}></LikeButton>
                </button>
              ) : (
                <button
                  onClick={() => {
                    apiCreateLike(Number(id), { isLiked: "true" });
                  }}
                  style={{ background: "none", border: "none" }}
                >
                  <LikeButton isLiked={feed.liked}></LikeButton>
                </button>
              )}
            </div>
          </div>
          {feed.type === "리뷰글" ? (
            <div className={`${styles[`feed-alcohol-info-container`]}`}>
              {/* <p>주종</p> */}
              <p className={`${styles[`feed-alcohol-type-tag`]}`} style={{ marginLeft: "5%" }}>
                {feed.liquorType}
              </p>
              {/* <p>술 이름</p> */}
              <p className={`${styles[`feed-alcohol-name`]}`}>{feed.liquorName}</p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
                {feed.type === "리뷰글" ? <Rating name="read-only" value={feed.ratingScore} readOnly /> : null}
                <p style={{ fontSize: "0.7rem", color: "gray" }}>{feed.writer.username}님의 평점</p>
              </div>
            </div>
          ) : null}
          <div className={`${styles[`comment-input-container`]}`}>
            <ChatBubbleOutlineIcon sx={{ color: "white" }}></ChatBubbleOutlineIcon>
            <form onSubmit={handleSubmit} className={`${styles[`comment-form`]}`}>
              <input
                className={`${styles[`comment-input`]}`}
                placeholder="댓글을 입력해주세요..."
                value={content}
                onChange={onChange}
              ></input>
              <input type="submit" value="완료" className={`${styles[`comment-form-btn`]}`}></input>
            </form>
          </div>
          {feed.comments.map((comment: Comment) => (
            <CommentItem key={comment.id} comment={comment}></CommentItem>
          ))}
          {/* <CommentList></CommentList> */}
        </div>
      )}
    </div>
  );
};

export default FeedDetail;
