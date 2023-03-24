import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./PlaygroundMain.module.css";

const PlaygroundMain = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <Link to={`/playground/abti`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame`]}`}>술BTI</div>
      </Link>
      <Link to={`/playground/hometender`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame`]}`}>홈텐더 레시피</div>
      </Link>
      <Link to={`/playground/guide`} style={{ textDecoration: "none" }}>
        <div className={`${styles[`card-frame`]}`}>입문서가이드</div>
      </Link>
    </div>
  );
}
export default PlaygroundMain;
