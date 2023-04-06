import styles from "@/pages/Home/AllDrinkList/AllDrink.module.css";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import { apiGetDrinkList, apiPutBookmark } from "@/api/drinks";
import { makeStyles } from "@material-ui/core/styles";
import { EnglishToCode } from "@/pages/Commons/Write/WriteReview";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";

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

const AllDrink = () => {
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [curPageNumber, setCurPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [drinkList, setDrinkList] = useState([]);
  const tabNumber =
    location.pathname === "/list/l1"
      ? 1
      : location.pathname === "/list/l2"
      ? 2
      : location.pathname === "/list/l3"
      ? 3
      : location.pathname === "/list/l4"
      ? 4
      : 5;

  useEffect(() => {
    const getDrinkList = async () => {
      const response = await apiGetDrinkList(`l${tabNumber}`, curPageNumber);
      if (response && response.data.success) {
        setDrinkList(response.data.body.content);
        setTotalPage(response.data.body.totalPage);
      }
    };
    getDrinkList();
  }, [curPageNumber, tabNumber]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPageNumber(value);
  };

  return (
    <div className={`${styles["container"]}`}>
      {tabNumber === 5 && (
        <div>
          <h3>칵테일</h3>
          <Link to={`/playground/guide?selectedButton=cocktail`}>
            <span>칵테일 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {drinkList.map((drink: any, index) => (
              <div key={index} className={`${styles["drink-wrap"]}`}>
                <div className={`${styles["drink-img"]}`}>
                  <img
                    className={`${styles["drink-item"]}`}
                    src={drink.img}
                    alt={drink.name}
                    onClick={() => navigate(`/details/${EnglishToCode[drink.liquorType]}/${drink.id}`)}
                  />
                </div>
                {isLogin?(
                <div className={styles["drink-label-wrap"]}>
                  <p className={`${styles["drink-name"]}`}>
                    {drink.name.length > 8 ? `${drink.name.substring(0, 8)}...` : drink.name}
                  </p>
                  {drink.scrapped ? (
                    <BookmarkIcon
                      onClick={() => {
                        apiPutBookmark("l5", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                      fontSize="small"
                    />
                  ) : (
                    <BookmarkBorder
                      onClick={() => {
                        apiPutBookmark("l5", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                    ></BookmarkBorder>
                  )}
                </div>
                ) : (
                  <div className={styles["drink-label-wrap-center"]}>
                    <div className={styles["drink-name"]}>
                      {drink.name.length > 15 ? `${drink.name.substring(0, 15)}...` : drink.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Stack spacing={2} className={`${styles["pagination-wrap"]}`}>
            <Pagination
              className={`${styles["pagination"]}`}
              count={totalPage - 1}
              page={curPageNumber}
              variant="outlined"
              onChange={handlePageChange}
              color="secondary"
              classes={{ root: classes.root }}
            />
          </Stack>
        </div>
      )}
      {tabNumber === 2 && (
        <div>
          <h3>위스키</h3>
          <Link to={`/playground/guide?selectedButton=whiskey`}>
            <span>위스키 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {drinkList.map((drink: any, index) => (
              <div key={index} className={`${styles["drink-wrap"]}`}>
                <div className={`${styles["drink-img"]}`}>
                  <img
                    className={`${styles["drink-item"]}`}
                    src={drink.img}
                    alt={drink.name}
                    onClick={() => navigate(`/details/${EnglishToCode[drink.liquorType]}/${drink.id}`)}
                  />
                </div>
                {isLogin?(
                <div className={styles["drink-label-wrap"]}>
                  <p className={`${styles["drink-name"]}`}>
                    {drink.name.length > 8 ? `${drink.name.substring(0, 8)}...` : drink.name}
                  </p>
                  {drink.scrapped ? (
                    <BookmarkIcon
                      onClick={() => {
                        apiPutBookmark("l2", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                      fontSize="small"
                    />
                  ) : (
                    <BookmarkBorder
                      onClick={() => {
                        apiPutBookmark("l2", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                    ></BookmarkBorder>
                  )}
                </div>
                ) : (
                  <div className={styles["drink-label-wrap-center"]}>
                    <div className={styles["drink-name"]}>
                    {drink.name.length > 15 ? `${drink.name.substring(0, 15)}...` : drink.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Stack spacing={2} className={`${styles["pagination-wrap"]}`}>
            <Pagination
              className={`${styles["pagination"]}`}
              count={totalPage - 1}
              page={curPageNumber}
              variant="outlined"
              onChange={handlePageChange}
              color="secondary"
              classes={{ root: classes.root }}
            />
          </Stack>
        </div>
      )}
      {tabNumber === 1 && (
        <div>
          <h3>와인</h3>
          <Link to={`/playground/guide?selectedButton=wine`}>
            <span>와인 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {drinkList.map((drink: any, index) => (
              <div key={index} className={`${styles["drink-wrap"]}`}>
                <div className={`${styles["drink-img"]}`}>
                  <img
                    className={`${styles["drink-item"]}`}
                    src={drink.img}
                    alt={drink.name}
                    onClick={() => navigate(`/details/${EnglishToCode[drink.liquorType]}/${drink.id}`)}
                  />
                </div>
                {isLogin? (
                <div className={styles["drink-label-wrap"]}>
                  <p className={`${styles["drink-name"]}`}>
                    {drink.name.length > 8 ? `${drink.name.substring(0, 8)}...` : drink.name}
                  </p>
                  {drink.scrapped ? (
                    <BookmarkIcon
                      onClick={() => {
                        apiPutBookmark("l1", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                      fontSize="small"
                    />
                  ) : (
                    <BookmarkBorder
                      onClick={() => {
                        apiPutBookmark("l1", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                    ></BookmarkBorder>
                  )}
                </div>
                ) : (
                  <div className={styles["drink-label-wrap-center"]}>
                    <div className={styles["drink-name"]}>
                    {drink.name.length > 15 ? `${drink.name.substring(0, 15)}...` : drink.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Stack spacing={2} className={`${styles["pagination-wrap"]}`}>
            <Pagination
              className={`${styles["pagination"]}`}
              count={totalPage - 1}
              page={curPageNumber}
              variant="outlined"
              onChange={handlePageChange}
              color="secondary"
              classes={{ root: classes.root }}
            />
          </Stack>
        </div>
      )}
      {tabNumber === 4 && (
        <div>
          <h3>전통주</h3>
          <Link to={`/playground/guide?selectedButton=korean`}>
            <span>전통주 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {drinkList.map((drink: any, index) => (
              <div key={index} className={`${styles["drink-wrap"]}`}>
                <div className={`${styles["drink-img"]}`}>
                  <img
                    className={`${styles["drink-item"]}`}
                    src={drink.img}
                    alt={drink.name}
                    onClick={() => navigate(`/details/${EnglishToCode[drink.liquorType]}/${drink.id}`)}
                  />
                </div>
                {isLogin?(
                <div className={styles["drink-label-wrap"]}>
                  <p className={`${styles["drink-name"]}`}>
                    {drink.name.length > 8 ? `${drink.name.substring(0, 8)}...` : drink.name}
                  </p>
                  {drink.scrapped ? (
                    <BookmarkIcon
                      onClick={() => {
                        apiPutBookmark("l4", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                      fontSize="small"
                    />
                  ) : (
                    <BookmarkBorder
                      onClick={() => {
                        apiPutBookmark("l4", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                    ></BookmarkBorder>
                  )}
                </div>
                ) : (
                  <div className={styles["drink-label-wrap-center"]}>
                    <div className={styles["drink-name"]}>
                    {drink.name.length > 15 ? `${drink.name.substring(0, 15)}...` : drink.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Stack spacing={2} className={`${styles["pagination-wrap"]}`}>
            <Pagination
              className={`${styles["pagination"]}`}
              count={totalPage - 1}
              page={curPageNumber}
              variant="outlined"
              onChange={handlePageChange}
              color="secondary"
              classes={{ root: classes.root }}
            />
          </Stack>
        </div>
      )}
      {tabNumber === 3 && (
        <div>
          <h3>맥주</h3>
          <Link to={`/playground/guide?selectedButton=beer`}>
            <span>맥주 입문가이드 바로가기 ▶ </span>
          </Link>
          <div className={`${styles["drink-list"]}`}>
            {drinkList.map((drink: any) => (
              <div key={drink.id} className={`${styles["drink-wrap"]}`}>
                <div className={`${styles["drink-img"]}`}>
                  <img
                    className={`${styles["drink-item"]}`}
                    src={drink.img}
                    alt={drink.name}
                    onClick={() => navigate(`/details/${EnglishToCode[drink.liquorType]}/${drink.id}`)}
                  />
                </div>
                {isLogin?(
                <div className={styles["drink-label-wrap"]}>
                  <p className={`${styles["drink-name"]}`}>
                    {drink.name.length > 8 ? `${drink.name.substring(0, 8)}...` : drink.name}
                  </p>
                  {drink.scrapped ? (
                    <BookmarkIcon
                      onClick={() => {
                        apiPutBookmark("l3", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                      fontSize="small"
                    />
                  ) : (
                    <BookmarkBorder
                      onClick={() => {
                        apiPutBookmark("l3", drink.id).then(() => {
                          apiGetDrinkList(EnglishToCode[drink.liquorType], curPageNumber).then((r) => {
                            setDrinkList(r?.data.body.content);
                          });
                        });
                      }}
                    ></BookmarkBorder>
                  )}
                </div>
                ) : (
                  <div className={styles["drink-label-wrap-center"]}>
                    <div className={styles["drink-name"]}>
                    {drink.name.length > 15 ? `${drink.name.substring(0, 15)}...` : drink.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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
      )}
    </div>
  );
};

export default AllDrink;
