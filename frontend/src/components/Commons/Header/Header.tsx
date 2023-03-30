import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import NeonTitle from "@/components/Commons/NeonTitle/NeonTitle";

const Header = () => {
  return (
    <div className={`${styles[`header-container`]}`}>
      <Link to="/">
        <NeonTitle></NeonTitle>
      </Link>
      <Link to="/search" className={`${styles[`search-button`]}`}>
        <SearchIcon />
      </Link>
    </div>
  );
};

export default Header;
