import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./pixel-drink.json";

const AbtiMain = () => {
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
    <div
      style={{
        // height: "80vh",
        marginTop: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={container} style={{ height: "150px", width: "150px" }}></div>
      <h1>내가 술이라면?</h1>
      <h2>술BTI 테스트</h2>
      <button>하러가기</button>
    </div>
  );
};
export default AbtiMain;
