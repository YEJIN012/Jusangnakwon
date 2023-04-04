import styles from "./DrinkDetail.module.css";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";
import ReviewList from "@/components/Commons/ReviewList/ReviewList";
import RecommendInDetail from "@/components/Commons/RecommendInDetail/RecommendInDetail";
import ReadMore from "@/components/Commons/ReadMore/ReadMore";
import HeaderBack from "@/components/Commons/Header/HeaderBack";
import { apiGetDrinkDetail } from "@/api/drinks";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { apiPutBookmark } from "@/api/drinks";
interface DrinkDetailItem {
  id: number;
  description: string | null;
  image: string;
  ingredients: string[] | null;
  liquorType: string;
  name: string;
  ratingAvg: number;
  reviews: DrinkDetailReviewItem[];
  scriptCnt: number | null;
  scrapped: boolean;
  similarItems: SimilarItem[];
  tastes: string[];
  writer: string | null;
}

export interface SimilarItem {
  id: number;
  name: string;
  img: string;
  liquorType: string;
}

export interface DrinkDetailReviewItem {
  id: number;
  ratingScore: number;
  dateCreated: Date;
  content: string | null;
  img: string | null;
}

const DrinkDetail = () => {
  const { drinktype, id } = useParams();
  const [drinkDetailItem, setDrinkDetailItem] = useState<DrinkDetailItem>();
  // console.log(drinktype, id);

  const drink = {
    id: 4140,
    type: "WINE",
    user_id: 3,
    name: "리씬 프르미에 메독",
    userName: "hojung",
    ratings: 4,
    userImg: "https://picsum.photos/30/30/?random",
    img: "https://picsum.photos/300/300/?random",
    writer: "스펩한이",
    ingredients: ["딸기", "소주", "사이다"],
    taste: ["단맛", "신맛", "쓴맛", "짠맛"],
    explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
  };

  const dummyList = [
    {
      id: 1,
      img: "https://picsum.photos/300/300/?random",
      name: "콥케",
      drinktype: "l6",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300/?random",
      name: "샌드맨",
      drinktype: "l6",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300/?random",
      name: "맛있는와인",
      drinktype: "l6",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
      drinktype: "l6",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/300/?random",
      name: "새콤한와인",
      drinktype: "l6",
    },
  ];

  useEffect(() => {
    if (drinktype != undefined && id != undefined) {
      apiGetDrinkDetail(drinktype, Number(id)).then((r) => {
        // console.log(r);
        if (r?.data.success === true) {
          setDrinkDetailItem(r?.data.body);
        } else {
          throw new Error("Feed detail axios 에러");
        }
      });
    }
  }, [drinktype, id]);

  const handleScrap = () => {
    if (drinktype != undefined && id != undefined) {
      apiPutBookmark(drinktype, Number(id)).then((r) => {
        apiGetDrinkDetail(drinktype, Number(id)).then((r) => {
          // console.log(r);
          if (r?.data.success === true) {
            setDrinkDetailItem(r?.data.body);
          } else {
            throw new Error("Feed detail axios 에러");
          }
        });
      });
    }
  };

  return (
    <>
      <HeaderBack></HeaderBack>
      <div className={`${styles[`drink-img-box`]}`}>
        <img src={drinkDetailItem?.image} className={`${styles[`drink-img`]}`}></img>
        {/* 일반 술이랑 공통 컴포로 쓰려면 업로드유저(user_id) 있는지 판별  */}
        {drinkDetailItem?.writer ? (
          <div className={`${styles[`user-profile-container-abs`]}`}>
            <div className={`${styles[`user-profile`]}`}>
              <img src={drink.userImg} className={`${styles[`user-img`]}`}></img>
              <p>{drink.userName}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className={`${styles[`drink-content-container`]}`}>
        <div className={`${styles[`drink-title-box`]}`}>
          <div className={`${styles[`drink-title`]}`}>
            <div>{drinkDetailItem?.name}</div>
            {drinkDetailItem?.ratingAvg && <Rating name="read-only" value={drinkDetailItem.ratingAvg} readOnly />}
          </div>
          {drinkDetailItem?.scrapped ? (
            <BookmarkIcon onClick={handleScrap}></BookmarkIcon>
          ) : (
            <BookmarkBorderIcon onClick={handleScrap}></BookmarkBorderIcon>
          )}
        </div>
        {drinkDetailItem?.ingredients && <Ingredients ingredients={drinkDetailItem?.ingredients}></Ingredients>}
        {drinkDetailItem?.tastes && <Ingredients ingredients={drinkDetailItem?.tastes}></Ingredients>}
        {drinkDetailItem?.description && <ReadMore content={drinkDetailItem?.description}></ReadMore>}
        {drinkDetailItem?.reviews && (
          <ReviewList
            id={drinkDetailItem.id}
            type={drinkDetailItem.liquorType}
            name={drinkDetailItem.name}
            reviews={drinkDetailItem.reviews}
          ></ReviewList>
        )}
        {/* <ReadMore content={drinkDetailItem?.description}></ReadMore> */}
        <RecommendInDetail similarItems={drinkDetailItem?.similarItems}></RecommendInDetail>
      </div>
    </>
  );
};

export default DrinkDetail;
