import React from "react";
import RecommendCarousel from "@/components/Playground/Hometender/RecommendCarousel";
import styles from "./Hometender.module.css";
import RecipeFeed from "@/components/Playground/Hometender/RecipeFeed";

const recommendDummy = [
  {
    id: 1,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "콥케",
    ingredients: ["딸기", "소주", "사이다"],
    explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
  },
  {
    id: 2,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "샌드맨",
    ingredients: ["딸기", "소주", "사이다", "메로나"],
    explan:
      "메로나 한개 다 넣어야합니다. 무조건이에요. 너무 달 것 같으면 사이다 비율을 줄이시면 됩니다. 달달하고 청량감있는거 좋아하시는 분들께 강추해요!",
  },
  {
    id: 3,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "맛있는와인",
    ingredients: ["딸기", "소주", "사이다"],
    explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
  },
  {
    id: 4,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    ingredients: ["딸기", "소주", "사이다", "메로나"],
    explan:
      "메로나 한개 다 넣어야합니다. 무조건이에요. 너무 달 것 같으면 사이다 비율을 줄이시면 됩니다. 달달하고 청량감있는거 좋아하시는 분들께 강추해요!",
  },
  {
    id: 5,
    type: "l6",
    img: "https://picsum.photos/300/300/?random",
    name: "달콤한와인",
    ingredients: ["딸기", "소주", "사이다"],
    explan: "크렌베리 + 딸기향, 상큼달콤하지만 도수가 높음",
  },
];

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
];

function HometenderMain() {
  return (
    <div className={`${styles[`container`]}`}>
      <div className={`${styles[`recommend-title`]}`}>당신을 위한 홈텐딩 레시피</div>
      <RecommendCarousel recommendList={recommendDummy}></RecommendCarousel>
      <div className={`${styles[`recommend-title`]}`}>주상낙원 Best 레시피</div>
      <RecommendCarousel recommendList={recommendDummy}></RecommendCarousel>
      <div className={`${styles[`recipe-title`]}`}>
        <div>주상낙원의 홈텐더들을 위한 레시피</div>
      </div>
        <RecipeFeed recipeList={recipeDummy}></RecipeFeed>
    </div>
  );
}
export default HometenderMain;
