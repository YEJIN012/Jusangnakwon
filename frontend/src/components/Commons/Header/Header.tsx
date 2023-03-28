import logo from "/assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NeonTitle from "@/components/Commons/NeonTitle/NeonTitle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const rootPathList = ["/", "/feed", "/playground", "/mypage"];
  const noneHeader = ["write", "loading"]
  const navigate = useNavigate();
  return (
    <>
      {pathname.includes("write") || pathname.includes("loading") ? (
        <></>
      ) : (
        <div className={`${styles[`header-container`]}`}>
          {rootPathList.includes(pathname) ? null : <ArrowBackIcon onClick={() => navigate(-1)} />}

          {pathname === "/search" ? (
            <Search sx={{ marginLeft: "2%" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="주상낙원 통합검색"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchValue}
              />
            </Search>
          ) : (
            <>
              {/* <img src={logo} height="20vw" alt="" /> */}
              <NeonTitle></NeonTitle>
              <Link to="search" className={`${styles[`search-button`]}`}>
                <SearchIcon />
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
