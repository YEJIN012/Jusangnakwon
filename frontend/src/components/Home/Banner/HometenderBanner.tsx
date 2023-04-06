import styles from "@/components/Home/Banner/HometenderBanner.module.css";
import cocktailimg from "/assets/stcocktail.png";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import HometenderBannerAni from "./HometenderAni";
import lottie from "lottie-web";
import animationData from "./cocktail.json";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";
import { HometenderApiData } from "@/pages/Home/HomeMain";
import { useDispatch } from "react-redux";
import { updateTabActions } from "@/slices/tabSlice";

const RandomColor: string[] = [
  "var(--tag-color-a)",
  "var(--tag-color-b)",
  "var(--tag-color-c)",
  "var(--tag-color-d)",
  "var(--tag-color-e)",
];

export default function HometenderBanner(props: HometenderApiData | null) {
  const container = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  const [randomColorNum, setRandomColorNum] = useState(Math.floor(Math.random() * 5)) 
  const changeTab = () => {dispatch(updateTabActions.updateTab("/playground/hometender"))}

  useEffect(() => {
    let animation: any;
    if (container.current) {
      animation = lottie.loadAnimation({
        container: container.current,
        animationData: animationData,
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };


  }, []);
  const recommendedHometender = props?.body;

  // 정규 표현식 사용해서 숫자 나오기 전까지 자르는 함수
  function extractStringBeforeNumber(str: string): string {
    const match = str.match(/^[^\d]*/);
    if (match) {
      return match[0];
    } else {
      return "";
    }
  }

  return (
    <Link to={`/playground/hometender`} onClick={() => {}}>
      <div className={`${styles[`container`]}`}>
        {/* <p className={`${styles[`hometender-banner-title`]}`}>인기 홈텐딩 칵테일</p> */}
        {/* <HometenderBannerAni></HometenderBannerAni> */}
        <div style={{ display: "flex" }}>
          <div ref={container} style={{ height: "150px", width: "150px" }}></div>
          {recommendedHometender ? (
            <div className={`${styles[`hometender-banner-container`]}`}>
              <div className={`${styles[`hometender-banner-box`]}`}>
                {/* <img
                src={recommendedHometender.img}
                className={`${styles[`hometender-banner-img`]}`}
                alt="추천 칵테일 이미지"
              ></img> */}
                <div className={`${styles[`hometender-banner-contents`]}`}>
                  <p className={`${styles[`hometender-banner-mini-title`]}`}>{recommendedHometender.name}</p>
                  <div className={`${styles[`hometender-banner-materials`]}`}>
                    {recommendedHometender.ingredients != null && recommendedHometender.ingredients.length > 1 ? (
                      recommendedHometender.ingredients
                        .slice(0, 2)
                        .map((material, index) => (
                          <p className={`${styles[`hometender-banner-material`]}`} style={{backgroundColor : RandomColor[randomColorNum]}} key={`${index}-${material}`}>
                            {extractStringBeforeNumber(material)}
                          </p>
                        ))
                        .concat(recommendedHometender.ingredients.length > 2 ? <p>...▶홈텐딩 하러 가기</p> : [])
                    ) : (
                      <>
                        {recommendedHometender.ingredients}
                        <p>...▶홈텐딩 하러 가기</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
