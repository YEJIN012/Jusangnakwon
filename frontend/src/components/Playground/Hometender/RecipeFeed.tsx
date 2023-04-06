import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeFeed.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { apiGetDrinkList, apiPutBookmark } from "@/api/drinks";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface RecipeList {
  recipeList: {
    id: number;
    name: string;
    img: string;
    liquorType: string;
    scrapped: boolean;
  }[];
}

interface RecipeType {
  id: number;
  name: string;
  img: string;
  liquorType: string;
  scrapped: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaginationItem-root:not(.Mui-selected)": {
      color: "white",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      color: "white",
      border: " 1px solid #5b5b5b",
      backgroundColor: " #80808032",
    },
  },
}));

const RecipeFeed = () => {
  const classes = useStyles();
  const [curPageNumber, setCurPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [drinkList, setDrinkList] = useState([]);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);


  // 북마크 상태를 변경한 뒤, 리스트 갱신하는 함수
  const handleScrap = (id: number) => {
    if (id !== undefined) {
      apiPutBookmark("l6", id)
        .then((r) => {
          apiGetDrinkList("l6", curPageNumber)
            .then((response) => {
              if (response && response.data.success) {
                console.log(response);
                setDrinkList(response.data.body.content);
                setTotalPage(response.data.body.totalPage);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // 페이지변화에 따라 리스트 재호출하는 함수
  useEffect(() => {
    const getDrinkList = async () => {
      const response = await apiGetDrinkList("l6", curPageNumber);
      if (response && response.data.success) {
        console.log(response);
        setDrinkList(response.data.body.content);
        setTotalPage(response.data.body.totalPage);
      }
    };
    getDrinkList();
  }, [curPageNumber]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPageNumber(value);
  };

  return (
    <div className={`${styles[`drink-list-wrap`]}`}>
      <div className={`${styles[`tab-drink-list`]}`}>
        {drinkList.map((drink: RecipeType, index) => (
          <div key={index} className={`${styles[`tab-drink-item`]}`}>
            <div className={styles["item-container"]}>
              <Link to={`/details/l6/${drink.id}`}>
                <img src={drink.img} style={{ height: "150px" }}></img>
              </Link>
              {isLogin ? (
              <div className={styles["item-title"]}>
                <div>{drink.name}</div>
                <div
                  className={styles["like-box"]}
                  onClick={() => {
                    handleScrap(drink.id);
                  }}
                >
                  {drink.scrapped ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </div>
              </div>
              ) : (
                <div className={styles["item-title-center"]}>
                  <div>{drink.name}</div>
                  </div>
              )}
            </div>
          </div>
        ))}
        <Stack spacing={2} className={`${styles["pagination-wrap"]}`}>
          <Pagination
            className={`${styles["pagination"]}`}
            count={totalPage - 1}
            page={curPageNumber}
            variant="outlined"
            onChange={handlePageChange}
            classes={{ root: classes.root }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default RecipeFeed;
