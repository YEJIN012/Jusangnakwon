import { useState, useEffect } from "react";
import { apiSearchDrink } from "@/api/home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import styles from "./SearchPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";

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
interface Content {
  id: number;
  name: string;
  liquorType: string;
}

interface Data {
  content: Content[] | null;
  curPageNumber: number;
  totalPage: number;
}

const SearchPage = () => {
  const [searchedData, setSearchedData] = useState<Data | null>();

  const navigate = useNavigate();

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(e.target.value);
    if (e.target.value) {
      apiSearchDrink(e.target.value).then((r) => {
        console.log(r);
        setSearchedData(r?.data.body);
        console.log(r?.data.body);
      });
    }
  };

  return (
    <div>
      <div className={`${styles[`header-container`]}`}>
        <ArrowBackIcon onClick={() => navigate(-1)} />

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
      </div>
      <div className={`${styles[`search-list-container`]}`}>
        {/* {searchedData &&
          searchedData.content &&
          searchedData.content.map((item: Content | null) => (
            // <div key={`'술'+${item.id}`} className={`${styles[`search-item`]}`}>
            //   <p>{item.id}</p>
            //   <p>{item.name}</p>
            //   <p>{item.liquorType}</p>
            // </div>
            <SearchItem content={item}></SearchItem> */}
        {/* ))} */}
        {/* {console.log(searchedData?.content[0])} */}
        {/* <div>{searchedData?.content[0]}</div> */}
        {searchedData === null ? <div>찾으시는 술이 없습니다.</div> : null}
        {searchedData && <SearchItem searchedData={searchedData}></SearchItem>}
      </div>
    </div>
  );
};
export default SearchPage;
