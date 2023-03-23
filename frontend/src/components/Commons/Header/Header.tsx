import logo from "/assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const rootPathList = ["/", "/feed", "/playground", "/mypage"];
  const navigate = useNavigate();
  return (
    <div className={`${styles[`header-container`]}`}>
      {rootPathList.includes(pathname) ? null : <ArrowBackIcon onClick={() => navigate(-1)} />}
      <img src={logo} height="20vw" alt="" />
      <SearchIcon />
    </div>
  );
}

export default Header;
