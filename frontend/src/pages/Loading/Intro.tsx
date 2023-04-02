import DrinkingAni from "@/components/Commons/DrinkingAni/DrinkingAni";
import styles from "./Intro.module.css";
import img from "/assets/neon-beer.png"
import img2 from "/assets/neon-welcome.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NeonTitle = () => {
  return (
    <>
      <div className={`${styles[`container`]}`}>
        <h6 id="text" spellCheck={false}>
          주상낙원
        </h6>
      </div>
    </>
  );
};

const Intro = () => {
  const navigate = useNavigate()
  const [isTimeout, setIsTimeout] = useState(false);
  const delayTime = 3000;
  // useEffect(() => {
  //   let timer = setTimeout(async () => {
  //     setIsTimeout(true);
  //     navigate("/", { state: { isFirst: false } })
  //   }, delayTime);
  // }, []);
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "100vh-114px",
        width: "",
        zIndex: "1000",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={`${styles[`cantilever`]}`}></div>
      </div>
      <NeonTitle></NeonTitle>

      {/* <div style={{ position: "absolute"}}> */}
      {/* <DrinkingAni></DrinkingAni> */}
      <img
        className={`${styles[`img-ani`]}`}
        src={img}
        // style={{ position: "absolute", bottom: "45px", right: "45px", width: "180px" }}
        style={{ position: "absolute", bottom: "25px", right: "25px", width: "110px" }}
        alt=""
      />
      {/* <img
        className={`${styles[`img-ani2`]}`}
        src={img2}
        style={{ position: "absolute", bottom: "100px", right: "1px", width: "300px" }}
        alt=""
      /> */}
      {/* </div> */}
      <div className={`${styles[`content`]}`}>
        <div className={`${styles[`content__container`]}`}>
          <p className={`${styles[`content__container__text`]}`}>더</p>

          <ul className={`${styles[`content__container__list`]}`}>
            <li className={`${styles[`content__container__list__item`]}`}>즐겁게 !</li>
            <li className={`${styles[`content__container__list__item`]}`}>다양하게 !</li>
            <li className={`${styles[`content__container__list__item`]}`}>즐겁게 !</li>
            <li className={`${styles[`content__container__list__item`]}`}>다양하게 !</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
