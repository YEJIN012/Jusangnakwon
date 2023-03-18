import MainTab2 from "@/components/Home/MainTab/MainTab22";
import MainTab from "@/components/Home/MainTab/MainTab";
import styles from "@/pages/Home/Home.module.css";

const Home = () => {
  return (
    <div className={`${styles[`container`]}`}>
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

export default Home;
