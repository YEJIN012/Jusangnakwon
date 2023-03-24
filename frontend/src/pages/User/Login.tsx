import { Outlet } from "react-router-dom";
import styles from "@/pages/User/Login.module.css";
import logo from "/assets/logo.png";
import kakao from "/assets/kakao-icon.png";
import google from "/assets/google-icon.png";

const Login = () => {
  return (
    <div className={`${styles["container"]}`}>
      <img src={logo} className={`${styles["logo-img"]}`} width="130px" alt="" />
      {/* <hr className={`${styles["line"]}`} /> */}
      <p className={`${styles["introduce-text"]}`}>
        와인부터 칵테일 전통주,
        <br />
        그리고 홈텐더들을 위한 레시피까지,
        <br />
        세상의 모든 술 어쩌구
      </p>
      <p className={`${styles["nineteen-text"]}`}>19세 이상 이용 가능한 서비스입니다.</p>
      <div className={`${styles["kakao"]}`}>
        <img src={kakao} />
        <span>카카오톡으로 시작하기</span>
      </div>
      <div className={`${styles["google"]}`}>
        <img src={google} />
        <span>구글계정으로 시작하기</span>
      </div>
    </div>
  );
};

export default Login;
