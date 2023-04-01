import { useState, useEffect, useRef } from "react";
import { apiSearchDrink } from "@/api/home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import styles from "./SearchPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";
import { SelectedLiquor } from "../Write/WriteReview";

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
  content: Array<Content> | null;
  curPageNumber: number;
  totalPage: number;
}

// interface ApiData {
//   success: boolean;
//   error: string | null;
//   body: {
//     totalPage: number;
//     curPageNumber: number;
//     content: Array<{
//       id: number;
//       name: string;
//       liquorType: string;
//     }>;
//   };
// }
interface Props {
  handleOpen?: (props: boolean) => void | undefined;
};

const SearchPage = (props: Props) => {
  const [searchedData, setSearchedData] = useState<Data | null>(null);
  const [searchingWord, setSearchigWord] = useState<string>("");
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchigWord(e.target.value);
    if (e.target.value) {
      apiSearchDrink(e.target.value, page)
        .then((r) => {
          // console.log(r);
          setSearchedData(r?.data.body);
          // console.log(r?.data.body);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (e.target.value === "") {
      setSearchedData(null);
    }
  };

  return (
    <div>
      <div className={`${styles[`header-container`]}`}>
        {props.handleOpen === undefined ? (
          <ArrowBackIcon onClick={() => navigate(-1)} />
        ) : (
          <ArrowBackIcon
            onClick={() => {
              props.handleOpen?.(false);
            }}
          />
        )}
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
        {searchedData === null ? <div className={`${styles[`search-no-drink`]}`}>찾으시는 술이 없습니다.</div> : null}
        {searchedData != null
          ? searchedData.content?.map((content: Content) => (
              <SearchItem key={content.id} content={content} searchingWord={searchingWord}></SearchItem>
            ))
          : null}
      </div>
    </div>
  );
};
export default SearchPage;
