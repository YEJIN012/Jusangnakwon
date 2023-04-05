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

interface ApiItem {
  id: number;
  name: string;
  img: string;
  liquorType: string;
  ingredients: string[];
  explain: string;
}

// const recommendDummy = [
//   {
//     id: 1,
//     type: "l6",
//     img: "https://picsum.photos/300/300/?random",
//     name: "콥케",
//     ingredients: ["딸기", "소주", "사이다"],
//     explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
//   },
//   {
//     id: 2,
//     type: "l6",
//     img: "https://picsum.photos/300/300/?random",
//     name: "샌드맨",
//     ingredients: ["딸기", "소주", "사이다", "메로나"],
//     explan:
//       "메로나 한개 다 넣어야합니다. 무조건이에요. 너무 달 것 같으면 사이다 비율을 줄이시면 됩니다. 달달하고 청량감있는거 좋아하시는 분들께 강추해요!",
//   },
//   {
//     id: 3,
//     type: "l6",
//     img: "https://picsum.photos/300/300/?random",
//     name: "맛있는와인",
//     ingredients: ["딸기", "소주", "사이다"],
//     explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
//   },
//   {
//     id: 4,
//     type: "l6",
//     img: "https://picsum.photos/300/300/?random",
//     name: "달콤한와인",
//     ingredients: ["딸기", "소주", "사이다", "메로나"],
//     explan:
//       "메로나 한개 다 넣어야합니다. 무조건이에요. 너무 달 것 같으면 사이다 비율을 줄이시면 됩니다. 달달하고 청량감있는거 좋아하시는 분들께 강추해요!",
//   },
//   {
//     id: 5,
//     type: "l6",
//     img: "https://picsum.photos/300/300/?random",
//     name: "달콤한와인",
//     ingredients: ["딸기", "소주", "사이다"],
//     explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
//   },
// ];

const recipeDummy = [
  {
    id: 1,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "콥케",
    likes: 4,
  },
  {
    id: 2,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "샌드맨",
    likes: 56,
  },
  {
    id: 3,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "맛있는와인",
    likes: 23,
  },
  {
    id: 4,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 332,
  },
  {
    id: 5,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 22,
  },
  {
    id: 6,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 22,
  },
  {
    id: 7,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 22,
  },
  {
    id: 8,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 22,
  },
  {
    id: 9,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 22,
  },
  {
    id: 10,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    likes: 22,
  },
];

const HometenderMain = () => {
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
        <RecipeFeed/>
      </div>
    </>
  );
};
export default HometenderMain;
