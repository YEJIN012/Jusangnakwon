import styles from "@/pages/Home/DrinkDetail/CocktailDetail.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Stars from "@/components/Commons/Stars/Stars";

const CocktailDetail = () => { 
    const { cocktailId } = useParams();
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
          content: "와인 추천해주세요!!",
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
    <div className={`${styles[`feed-classify-btn`]}`}>
    {dummyFeedList
      .filter((feed) => feed.id === Number(cocktailId))
      .map((feed) => (
        <div key={feed.id}>
          <img src={feed.img} className={`${styles[`feed-img`]}`}></img>
          <div className={`${styles[`feed-content-container`]}`}>
            <div>
              <p>{feed.content}</p>
              <button className={`${styles[`feed-detail-content-btn`]}`}>더보기</button>
            </div>
            <div className={`${styles[`feed-stars-like`]}`}>
              <Stars></Stars>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      ))}
  </div>
  );
};

export default CocktailDetail;
