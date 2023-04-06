import RecommendCarousel from "@/components/Playground/Hometender/RecommendCarousel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./Hometender.module.css";
import RecipeFeed from "@/components/Playground/Hometender/RecipeFeed";
import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import React, { useEffect, useState } from "react";
import { apiGetRankedHometender } from "@/api/hometender";
import { apiGetLoginRecommendedByType } from "@/api/home";
import { apiGetDrinkList } from "@/api/drinks";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";

interface ApiItem {
  id: number;
  name: string;
  img: string;
  liquorType: string;
  ingredients: string[];
  explain: string;
}

const HometenderMain = () => {
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const [rankRecommendList, setrankRecommendList] = useState([]);
  const [loginRecommendList, setLoginRecommendList] = useState([]);
  useEffect(() => {
    // 주상낙원 BEST 레시피
    apiGetRankedHometender("l6", 1)
      .then((r) => {
        console.log(r?.data.body.content);
        setrankRecommendList(
          r?.data.body.content.map((item: ApiItem) => ({
            ...item,
            type: item.liquorType,
            ingredients: item.ingredients,
            explain: item.explain,
          })),
        );
      })
      .catch((e) => {
        console.log(e);
      });

    // 당신을 위한 홈텐딩 레시피
    apiGetLoginRecommendedByType("l6", 1)
      .then((r) => {
        setLoginRecommendList(
          r?.data.body.content.map((item: ApiItem) => ({
            ...item,
            type: item.liquorType,
            ingredients: item.ingredients,
            explain: item.explain,
          })),
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <FloatingButton></FloatingButton>
      <div className={`${styles[`container`]}`}>
        <div className={`${styles[`carousel-wrap`]}`}>
          {isLogin ? (
            <div className={`${styles[`carousel-item`]}`}>
              {loginRecommendList ? (
                <div className={`${styles[`carousel-item`]}`}>
                  <div className={`${styles[`recommend-title`]}`}>당신을 위한 홈텐딩 레시피</div>
                  <RecommendCarousel recommendList={loginRecommendList}></RecommendCarousel>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}

          <div className={`${styles[`carousel-item`]}`}>
            {rankRecommendList ? (
              <>
                <div className={`${styles[`recommend-title`]}`}>주상낙원 Best 레시피</div>
                <RecommendCarousel recommendList={rankRecommendList}></RecommendCarousel>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={`${styles[`recipe-title`]}`}>
          <div>주상낙원의 홈텐더들을 위한 레시피</div>
        </div>
        <RecipeFeed />
      </div>
    </>
  );
};
export default HometenderMain;
