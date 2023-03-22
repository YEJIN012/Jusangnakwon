import MainTab from "@/components/Home/MainTab/MainTab";
import styles from "@/pages/Home/HomeMain.module.css";
import { Link } from "react-router-dom";

const HomeMain = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <Link to={`/login`}>
      <div>록으인</div>
      </Link>
      <div className={`${styles[`banner-box`]}`}>
        <p>
          홈텐딩 레시피 바로가기! <br />
          (임시로 넣어놓음)
        </p>
      </div>
      <div className={`${styles[`text-wrap`]}`}>
        <h3>나는멋쟁이호님의 취향</h3>
        <p>당신의 취향에 맞는 술을 주종별로 추천해드려요!</p>
      </div>
      <MainTab />
    </div>
  );
};

export default HomeMain;
