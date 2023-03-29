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
      </Link>
      <Link to="/search" className={`${styles[`search-button`]}`}>
        <SearchIcon />
      </Link>
    </div>
  );
};

export default HeaderBack;
