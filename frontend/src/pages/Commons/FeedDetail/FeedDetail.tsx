import styles from "./FeedDetail.module.css";
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Menu, MenuItem, Rating, Button } from "@mui/material";
import FavoriteBorerIcon from "@mui/icons-material/FavoriteBorder";
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
import { EnglishToKorean, EnglishToCode } from "@/pages/Commons/Write/WriteReview";
import { alcoholTypeStyle } from "@/pages/MyPage/BookmarkList";
import StarIcon from "@mui/icons-material/Star";
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
  liquorId: number;
  liquorType: string;
  liquorName: string;
  ratingScore: number;
  comments: Comment[];
}

interface CommentFormData {
  feedId: number;
  content: string;
}

const FeedDetail = () => {
  const { id } = useParams();
  const [feed, setFeed] = useState<FeedDetailContent | null>(null);
  const [shoot, setShoot] = useState(true);
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
    if (feed) {
      setShoot(feed?.liked);
    }
  }, [feed]);

  useEffect(() => {
    apiGetFeedDetail(Number(id))
      .then((r) => {
        console.log(r);
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

  const createLike = () => {
    // console.log(Number(id), shoot);
    apiCreateLike(Number(id), { isLiked: !shoot }).then(() => {
      apiGetFeedDetail(Number(id))
        .then((r) => {
          // console.log(r);
          setFeed(r?.data.body);
        })
        .catch((e) => console.log(e));
    });
  };

  return (
    <div>
      <HeaderBack></HeaderBack>
      {feed && (
        <div key={feed.id} className={`${styles[`container`]}`}>
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
          </div>
          <img src={feed.img} className={`${styles[`feed-img`]}`}></img>
          <h2 style={{ marginLeft: "3%" }}>{feed.title}</h2>
          <div className={`${styles[`feed-content-container`]}`}>
            <ReadMore content={feed.content}></ReadMore>
            <div className={`${styles[`feed-stars-like`]}`}>
              {/* {feed.liked ? ( */}
              {/* <button onClick={createLike} style={{ background: "none", border: "none" }}> */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <LikeButton isLiked={feed.liked} createLike={createLike}></LikeButton>
                <p style={{ color: "white", marginTop: "-10px" }}>{feed.likeCnt}</p>
              </div>
              {/* </button> */}
              {/* ) : (
                <button onClick={createLike} style={{ background: "none", border: "none" }}>
                  <LikeButton isLiked={feed.liked}></LikeButton>
                  <p style={{ color: "white", marginTop: "-10px" }}>{feed.likeCnt}</p>
                </button>
              )} */}
            </div>
          </div>
          {feed.type === "리뷰글" ? (
            <div className={`${styles[`feed-alcohol-info-container`]}`}>
              {/* <p>주종</p> */}
              <p
                className={`${styles[`feed-alcohol-type-tag`]}`}
                style={{
                  backgroundColor: alcoholTypeStyle[EnglishToCode[feed.liquorType]],
                }}
              >
                {EnglishToKorean[feed?.liquorType]}
              </p>
              {/* <p>술 이름</p> */}
              <p className={`${styles[`feed-alcohol-name`]}`}>{feed.liquorName}</p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
                {feed.type === "리뷰글" ? (
                  <Rating
                    name="read-only"
                    value={feed.ratingScore}
                    readOnly
                    emptyIcon={<StarIcon sx={{ color: "gray" }} fontSize="inherit" />}
                  />
                ) : null}
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
