import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import NeonTitle from "@/components/Commons/NeonTitle/NeonTitle";
import { apiSearchDrink } from "@/api/home";
import NeonBtn from "../NeonBtn/NeonBtn";

const Header = () => {
  return (
    <div className={`${styles[`header-container`]}`}>
      <Link to="/">
        <NeonTitle></NeonTitle>
        {/* <NeonBtn></NeonBtn> */}
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logofavicon.png"
            className={`${styles[`h5`]}`}
            style={{ height: "40px", width: "40px", marginLeft: "-9px", marginTop: "-2px" }}
          ></img>
          <p style={{ fontFamily: "TheJamsil5Bold" }}>주상낙원</p>
        </div> */}
      </Link>
      <Link to="/search" className={`${styles[`search-button`]}`}>
        <SearchIcon />
      </Link>
    </div>
  );
};

export default Header;
