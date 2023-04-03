import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Header.module.css";
import { useNavigate, Link } from "react-router-dom";
import NeonTitle from "@/components/Commons/NeonTitle/NeonTitle";

const HeaderBack = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles[`header-container`]}`}>
      <ArrowBackIcon onClick={() => navigate(-1)} />
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
