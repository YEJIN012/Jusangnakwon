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
import { apiGetDrinkDetail, apiPutBookmark } from "@/api/drinks";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";

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
  writer: { username: string; profileImg: string };
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
  console.log(drinktype, id);

  useEffect(() => {
    if (drinktype != undefined && id != undefined) {
      apiGetDrinkDetail(drinktype, Number(id)).then((r) => {
        console.log(r);
        if (r?.data.success === true) {
          setDrinkDetailItem(r?.data.body);
          console.log(r?.data.body);
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
            // console.log("북마크", r?.data.body);
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
        <div className={drinkDetailItem?.image ? `${styles[`drink-img-wrapper`]}` : ""}>
          <img src={drinkDetailItem?.image} className={drinkDetailItem?.image ? `${styles[`drink-img`]}` : ""}></img>
        </div>
        {/* 일반 술이랑 공통 컴포로 쓰려면 업로드유저(user_id) 있는지 판별  */}
        {drinkDetailItem?.writer ? (
          <div className={`${styles[`user-profile-container-abs`]}`}>
            <div className={`${styles[`user-profile`]}`}>
              <img src={drinkDetailItem.writer.profileImg} className={`${styles[`user-img`]}`}></img>
              <p>{drinkDetailItem.writer.username}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className={`${styles[`drink-content-container`]}`}>
        <div className={`${styles[`drink-title-box`]}`}>
          <div className={`${styles[`drink-title`]}`}>
            <div>{drinkDetailItem?.name}</div>
            <Rating
              name="read-only"
              value={drinkDetailItem?.ratingAvg}
              emptyIcon={<StarIcon sx={{ color: "gray" }} fontSize="inherit" />}
              readOnly
            />
          </div>
          {drinkDetailItem?.scrapped ? (
            <BookmarkIcon onClick={handleScrap}></BookmarkIcon>
          ) : (
            <BookmarkBorderIcon onClick={handleScrap}></BookmarkBorderIcon>
          )}
        </div>
        {drinkDetailItem?.ingredients && <Ingredients ingredients={drinkDetailItem?.ingredients}></Ingredients>}
        {drinkDetailItem?.tastes && <Ingredients ingredients={drinkDetailItem?.tastes} taste={true}></Ingredients>}
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
