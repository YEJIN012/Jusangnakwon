import styles from "@/components/Home/Banner/HometenderBanner.module.css";
import cocktailimg from "/assets/stcocktail.png";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import HometenderBannerAni from "./HometenderAni";
import lottie from "lottie-web";
import animationData from "./cocktail.json";
import animationData2 from "./right-arrow.json";
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
  const container2 = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [randomColorNum, setRandomColorNum] = useState(Math.floor(Math.random() * 5));
  const changeTab = () => {
    dispatch(updateTabActions.updateTab("/playground/hometender"));
  };

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
  });

  useEffect(() => {
    let animation: any;
    if (container2.current) {
      animation = lottie.loadAnimation({
        container: container2.current,
        animationData: animationData2,
      });
    }
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  });
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
        <div className={`${styles[`hometender-img-title-container`]}`}>
          <div ref={container} style={{ height: "150px", width: "150px" }}></div>
          {recommendedHometender ? (
            <div className={`${styles[`hometender-banner-container`]}`}>
              <div className={`${styles[`hometender-banner-box`]}`}>
                <div className={`${styles[`hometender-banner-contents`]}`}>
                  <p className={`${styles[`hometender-banner-mini-title`]}`}>{recommendedHometender.name}</p>
                  <div className={`${styles[`hometender-banner-materials`]}`}>
                    {recommendedHometender.ingredients != null &&
                      recommendedHometender.ingredients.slice(0, 2).map((material, index) => (
                        <p
                          className={`${styles[`hometender-banner-material`]}`}
                          style={{ backgroundColor: RandomColor[randomColorNum] }}
                          key={`${index}-${material}`}
                        >
                          {extractStringBeforeNumber(material)}
                        </p>
                      ))}

                    <p style={{ display: "flex", alignContent: "center", alignItems: "center" }}>
                      <div ref={container2} style={{ height: "50px", width: "80px", marginLeft: "-30px" }}></div>
                      <p style={{ fontSize: "0.9rem", color: "lightgray" }}>홈텐딩 하러 가기</p>
                    </p>
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
