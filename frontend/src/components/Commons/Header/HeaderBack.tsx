import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Header.module.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import NeonTitle from "@/components/Commons/NeonTitle/NeonTitle";

const HeaderBack = () => {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <div className={`${styles[`header-container`]}`}>
      {/* 작성페이지->상세페이지 로직에서 state.writeSuccess가 담기면, -2로 이동(작성페이지 다시 안보기 위해)*/}
      <ArrowBackIcon onClick={() => navigate(location.state?.writeSuccess ? -2 :-1)} />
      <Link to="/">
        <NeonTitle></NeonTitle>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logofavicon.png"
            className={`${styles[`h5`]}`}
            style={{ height: "40px", width: "40px", fontSize: "0.8rem", marginLeft: "-9px", marginTop: "-2px" }}
          ></img>
          <p>주상낙원</p>
        </div> */}
      </Link>
      <Link to="/search" className={`${styles[`search-button`]}`}>
        <SearchIcon />
      </Link>
    </div>
  );
};

export default HeaderBack;
