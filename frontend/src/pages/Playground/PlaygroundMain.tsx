import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./PlaygroundMain.module.css";
import lottie from "lottie-web";
import animationData from "./book.json";

const PlaygroundMain = () => {
  const container = useRef<HTMLDivElement>(null);

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
  return (
    <div className={`${styles[`container`]}`}>
      <Link to={`/playground/abti`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame-abti`]}`}>
          <div className={`${styles[`card-frame-abti-colorbg`]}`}>
            <p>술BTI</p>
            <p className={`${styles[`card-frame-abti-info`]}`}>
              간단한 테스트를 통해<br></br>나를 표현한 술을 알아보세요!
            </p>
          </div>
        </div>
      </Link>
      <Link to={`/playground/hometender`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame-hometender`]}`}>
          <img src="/assets/cocktail2.png" className={`${styles[`card-hometender-png-1`]}`}></img>
          <img src="/assets/cocktail3.png" className={`${styles[`card-hometender-png-2`]}`}></img>
          <p>홈텐더 레시피</p>
          <p className={`${styles[`card-hometender-info`]}`}>집에서 만드는 나만의 칵테일</p>
        </div>
      </Link>
      <Link to={`/playground/guide`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame-guide`]}`}>
          <div className={`${styles[`card-guide-title`]}`}>
            <div ref={container} style={{ height: "150px", width: "150px" }}></div>
            {/* <img src="/assets/guidebook.png" style={{ height: "70px", width: "65px" }}></img> */}
            <p style={{ marginLeft: "-14%" }}>입문자가이드</p>
          </div>
          <p className={`${styles[`card-guide-info`]}`}>
            술을 어떻게 시작 해야할지 <br></br>모르겠다면?
          </p>
        </div>
      </Link>
    </div>
  );
};
export default PlaygroundMain;
