import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./PlaygroundMain.module.css";

const PlaygroundMain = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <Link to={`/playground/abti`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame-abti`]}`}>
          <div className={`${styles[`card-frame-abti-colorbg`]}`}>
            <p className={`${styles[`card-frame-abti-info`]}`}>
              간단한 테스트를 통해<br></br>나를 표현한 술을 알아보세요!
            </p>
            <p>술BTI</p>
          </div>
        </div>
      </Link>
      <Link to={`/playground/hometender`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame`]}`}>홈텐더 레시피</div>
      </Link>
      <Link to={`/playground/guide`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame`]}`}>입문서가이드</div>
      </Link>
    </div>
  );
};
export default PlaygroundMain;
