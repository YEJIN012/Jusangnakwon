import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "@/components/Home/MainTab/MainTab.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import { apiGetLoginRecommendedByType, apiGetNotLoginRecommendedByType } from "@/api/home";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { apiPutBookmark } from "@/api/drinks";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface DrinkItem {
  id: string;
  name: string;
  img: string;
  liquorType: string;
  scrapped: boolean;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MainTab() {
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [drinkItem, setDrinkItem] = useState<DrinkItem>();

  // 북마크 상태를 변경하는 함수
  // const handleScrap = () => {
  //   if (drinktype !== undefined && id !== undefined) {
  //     apiPutBookmark(drinktype, Number(id))
  //       .then(() => setBookmarked((prev) => !prev))
  //       .catch((error) => console.log(error));
  //   }
  // };

  console.log(value);
  // 칵테일
  const [cocktailItemsToShow, setcocktailItemsToShow] = useState(6);
  const [cocktailList, setCocktailList] = useState<DrinkItem[]>([]);
  const [cocktailListToShow, setCocktailListToShow] = useState<DrinkItem[]>([]);
  const [isLoadingMoreCocktails, setIsLoadingMoreCocktails] = useState(false);
  const [cocktailCurPageNumber, setCocktailCurPageNumber] = useState<number>(1);
  const [cocktailTotalPage, setCocktailTotalPage] = useState<number>(0);

  // 위스키
  const [whiskyItemsToShow, setwhiskyItemsToShow] = useState(6);
  const [whiskyList, setWhiskyList] = useState<DrinkItem[]>([]);
  const [whiskyListToShow, setWhiskyListToShow] = useState<DrinkItem[]>([]);
  const [isLoadingMoreWhiskys, setIsLoadingMoreWhiskys] = useState(false);
  const [whiskyCurPageNumber, setWhiskyCurPageNumber] = useState<number>(1);
  const [whiskyTotalPage, setWhiskyTotalPage] = useState<number>(0);

  // 와인
  const [wineItemsToShow, setwineItemsToShow] = useState(6);
  const [wineList, setWineList] = useState<DrinkItem[]>([]);
  const [wineListToShow, setWineListToShow] = useState<DrinkItem[]>([]);
  const [isLoadingMoreWines, setIsLoadingMoreWines] = useState(false);
  const [wineCurPageNumber, setWineCurPageNumber] = useState<number>(1);
  const [wineTotalPage, setWineTotalPage] = useState<number>(0);

  // 전통주
  const [koreanItemsToShow, setkoreanItemsToShow] = useState(6);
  const [koreanList, setKoreanList] = useState<DrinkItem[]>([]);
  const [koreanListToShow, setKoreanListToShow] = useState<DrinkItem[]>([]);
  const [isLoadingMoreKoreans, setIsLoadingMoreKoreans] = useState(false);
  const [koreanCurPageNumber, setKoreanCurPageNumber] = useState<number>(1);
  const [koreanTotalPage, setKoreanTotalPage] = useState<number>(0);

  // 맥주
  const [beerItemsToShow, setbeerItemsToShow] = useState(6);
  const [beerList, setBeerList] = useState<DrinkItem[]>([]);
  const [beerListToShow, setBeerListToShow] = useState<DrinkItem[]>([]);
  const [isLoadingMoreBeers, setIsLoadingMoreBeers] = useState(false);
  const [beerCurPageNumber, setBeerCurPageNumber] = useState<number>(1);
  const [beerTotalPage, setBeerTotalPage] = useState<number>(0);

  const navigate = useNavigate();
  // const classes = useStyles();

  const drinktype = ["칵테일", "위스키", "와인", "전통주", "맥주"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  // 와인 더보기
  const handleShowMoreWineItems = () => {
    if (!isLoadingMoreWines && wineCurPageNumber < wineTotalPage) {
      setIsLoadingMoreWines(true);
      setWineCurPageNumber(wineCurPageNumber + 1);
      setwineItemsToShow(wineItemsToShow + 6);
      setIsLoadingMoreWines(false);
      console.log(wineTotalPage);
      console.log(wineCurPageNumber);
    }
  };

  // 칵테일 더보기
  const handleShowMoreCocktailItems = () => {
    if (!isLoadingMoreCocktails && cocktailCurPageNumber < cocktailTotalPage) {
      setIsLoadingMoreCocktails(true);
      setCocktailCurPageNumber(cocktailCurPageNumber + 1);
      // setcocktailItemsToShow(cocktailItemsToShow + 6);
      setcocktailItemsToShow((prev) => prev + 6);
      setIsLoadingMoreCocktails(false);
      console.log(cocktailTotalPage);
      console.log(cocktailCurPageNumber);
    }
  };

  // 위스키 더보기
  const handleShowMoreWhiskyItems = () => {
    if (!isLoadingMoreWhiskys && whiskyCurPageNumber < whiskyTotalPage) {
      setIsLoadingMoreWhiskys(true);
      setWhiskyCurPageNumber(whiskyCurPageNumber + 1);
      setwhiskyItemsToShow(whiskyItemsToShow + 6);
      setIsLoadingMoreWhiskys(false);
      console.log(whiskyTotalPage);
      console.log(whiskyCurPageNumber);
    }
  };

  // 전통주 더보기
  const handleShowMoreKoreanItems = () => {
    if (!isLoadingMoreKoreans && koreanCurPageNumber < koreanTotalPage) {
      setIsLoadingMoreKoreans(true);
      setKoreanCurPageNumber(koreanCurPageNumber + 1);
      setkoreanItemsToShow(koreanItemsToShow + 6);
      setIsLoadingMoreKoreans(false);
      console.log(koreanTotalPage);
      console.log(koreanCurPageNumber);
    }
  };

  // 맥주 더보기
  const handleShowMoreBeerItems = () => {
    if (!isLoadingMoreBeers && beerCurPageNumber < beerTotalPage) {
      setIsLoadingMoreBeers(true);
      setBeerCurPageNumber(beerCurPageNumber + 1);
      setbeerItemsToShow(beerItemsToShow + 6);
      setIsLoadingMoreBeers(false);
      console.log(beerTotalPage);
      console.log(beerCurPageNumber);
    }
  };

  // 비로그인시 호출하는 api
  if (!isLogin) {
    console.log(isLogin);
    // 와인
    useEffect(() => {
      apiGetNotLoginRecommendedByType("l1", wineCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const wineList = res.data.body.content.filter((item: any) => item.liquorType === "WINE");
            setWineList((prevWineList) => [...prevWineList, ...wineList]);
            setWineListToShow((prevWineListToShow) => [...prevWineListToShow, ...wineList.slice(0, wineItemsToShow)]);
            setWineTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [wineCurPageNumber]);

    // 칵테일
    useEffect(() => {
      apiGetNotLoginRecommendedByType("l5", cocktailCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const cocktailList = res.data.body.content.filter((item: any) => item.liquorType === "COCKTAIL");
            setCocktailList((prevCocktailList) => [...prevCocktailList, ...cocktailList]);
            setCocktailListToShow((prevCocktailListToShow) => [
              ...prevCocktailListToShow,
              ...cocktailList.slice(0, cocktailItemsToShow),
            ]);
            setCocktailTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [cocktailCurPageNumber, cocktailItemsToShow]);

    // 위스키
    useEffect(() => {
      apiGetNotLoginRecommendedByType("l2", whiskyCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const whiskyList = res.data.body.content.filter((item: any) => item.liquorType === "WHISKY");
            setWhiskyList((prevWhiskyList) => [...prevWhiskyList, ...whiskyList]);
            setWhiskyListToShow((prevWhiskyListToShow) => [
              ...prevWhiskyListToShow,
              ...whiskyList.slice(0, whiskyItemsToShow),
            ]);
            setWhiskyTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [whiskyCurPageNumber]);

    // 전통주
    useEffect(() => {
      apiGetNotLoginRecommendedByType("l4", koreanCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const koreanList = res.data.body.content.filter((item: any) => item.liquorType === "TRADITION");
            setKoreanList((prevKoreanList) => [...prevKoreanList, ...koreanList]);
            setKoreanListToShow((prevKoreanListToShow) => [
              ...prevKoreanListToShow,
              ...koreanList.slice(0, koreanItemsToShow),
            ]);
            setKoreanTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [koreanCurPageNumber]);

    // 맥주
    useEffect(() => {
      apiGetNotLoginRecommendedByType("l3", beerCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const beerList = res.data.body.content.filter((item: any) => item.liquorType === "BEER");
            setBeerList((prevBeerList) => [...prevBeerList, ...beerList]);
            setBeerListToShow((prevBeerListToShow) => [...prevBeerListToShow, ...beerList.slice(0, beerItemsToShow)]);
            setBeerTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [beerCurPageNumber]);

    // 로그인시 호출 api
  } else {
    console.log(isLogin);
    useEffect(() => {
      apiGetLoginRecommendedByType("l1", wineCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const wineList = res.data.body.content.filter((item: any) => item.liquorType === "WINE");
            setWineList((prevWineList) => [...prevWineList, ...wineList]);
            setWineListToShow((prevWineListToShow) => [...prevWineListToShow, ...wineList.slice(0, wineItemsToShow)]);
            setWineTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [wineCurPageNumber]);

    // 칵테일
    useEffect(() => {
      apiGetLoginRecommendedByType("l5", cocktailCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const cocktailList = res.data.body.content.filter((item: any) => item.liquorType === "COCKTAIL");
            setCocktailList((prevCocktailList) => [...prevCocktailList, ...cocktailList]);
            setCocktailListToShow((prevCocktailListToShow) => [
              ...prevCocktailListToShow,
              ...cocktailList.slice(0, cocktailItemsToShow),
            ]);
            setCocktailTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [cocktailCurPageNumber, cocktailItemsToShow]);

    // 위스키
    useEffect(() => {
      apiGetLoginRecommendedByType("l2", whiskyCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const whiskyList = res.data.body.content.filter((item: any) => item.liquorType === "WHISKY");
            setWhiskyList((prevWhiskyList) => [...prevWhiskyList, ...whiskyList]);
            setWhiskyListToShow((prevWhiskyListToShow) => [
              ...prevWhiskyListToShow,
              ...whiskyList.slice(0, whiskyItemsToShow),
            ]);
            setWhiskyTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [whiskyCurPageNumber]);

    // 전통주
    useEffect(() => {
      apiGetLoginRecommendedByType("l4", koreanCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const koreanList = res.data.body.content.filter((item: any) => item.liquorType === "TRADITION");
            setKoreanList((prevKoreanList) => [...prevKoreanList, ...koreanList]);
            setKoreanListToShow((prevKoreanListToShow) => [
              ...prevKoreanListToShow,
              ...koreanList.slice(0, koreanItemsToShow),
            ]);
            setKoreanTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [koreanCurPageNumber]);

    // 맥주
    useEffect(() => {
      apiGetLoginRecommendedByType("l3", beerCurPageNumber)
        .then((res: any) => {
          console.log(res);
          if (res.data.success) {
            const beerList = res.data.body.content.filter((item: any) => item.liquorType === "BEER");
            setBeerList((prevBeerList) => [...prevBeerList, ...beerList]);
            setBeerListToShow((prevBeerListToShow) => [...prevBeerListToShow, ...beerList.slice(0, beerItemsToShow)]);
            setBeerTotalPage(res.data.body.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [beerCurPageNumber]);
  }

  const themes = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            minWidth: "unset",
            fontFamily: "Hahmlet, serif",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={themes}>
      <Box sx={{ bgcolor: "#06031A", width: "100%", color: "white" }}>
        <AppBar position="static">
          <Tabs
            // 전체 탭 버튼 기본 스타일
            sx={{
              // 탭버튼 전체 bgc
              bgcolor: "#06031A",
              "& .Mui-selected": {
                color: "white",
                // bgcolor: "#EE84FF",
                // borderTopLeftRadius: 10,
                // borderTopRightRadius: 10,
                // borderBottomRightRadius: 10,
                // borderBottomLeftRadius: 10,
                // paddingLeft: "20px",
                // paddingRight: "20px",
              },
              "& .MuiTab-root": {
                // borderTopLeftRadius: 10,
                // borderTopRightRadius: 10,
                // borderBottomRightRadius: 10,
                // borderBottomLeftRadius: 10,
                // border: "1px solid gray",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                // borderBottom: "none",
                // paddingLeft: "10px",
                // paddingRight: "10px",
                // paddingTop: "2px",
                // paddingBottom: "2px",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
            value={value}
            onChange={handleChange}
            // indicatorColor="transparent"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {drinktype.map((type, index) => {
              return (
                <Tab
                  label={type}
                  key={index}
                  {...a11yProps(index)}
                  sx={{
                    // 칵테일 버튼 선택됐을 때 스타일
                    bgcolor: value === index ? "#06031A" : "#06031A",
                    border: value === index ? "solid 2px #E1D1FF" : "solid 2px transparent",
                    // boxShadow: value === 0 ? '0 0 10px 5px #8DFFFF':"#06031A",
                    // box-shadow: 0 0 10px 5px #8DFFFF
                    fontSize: { xs: 12, md: 16 },
                    whiteSpace: "nowrap",
                    // "&:hover": { bgcolor: "#7B334E" },
                  }}
                  disableRipple
                />
              );
            })}
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div
              style={{
                background: "#06031A",
                // value === 0 ? "linear-gradient(212.38deg, #665582 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                // "#06031A"
                // border:"solid 2px",
                // "linear-gradient(212.38deg, #A0425F 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/list/l5`}>
                  <span className={`${styles[`all-drink-list`]}`}>
                    전체 {drinktype[0]} 보기 <KeyboardArrowRightIcon sx={{ color: "white" }}></KeyboardArrowRightIcon>
                  </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {cocktailListToShow.map(({ id, img, name }, index) => (
                    <div key={index} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/l5/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "100%" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>
                            {name.length > 15 ? `${name.substring(0, 15)}...` : name}
                          </div>
                          {drinkItem?.scrapped ? (
                            <BookmarkIcon
                            onClick={() => {
                              apiPutBookmark("l5", Number(id));
                            }}
                          />
                          ) : (
                            <BookmarkBorderIcon
                            onClick={() => {
                              apiPutBookmark("l5", Number(id));
                            }}
                          />
                          )
                        }
                          
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoadingMoreCocktails && <div>Loading...</div>}
                  {!isLoadingMoreCocktails && cocktailCurPageNumber < cocktailTotalPage - 1 && (
                    <a className={`${styles["more-drink-btn"]}`} onClick={handleShowMoreCocktailItems}>
                      더보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div
              style={{
                background: "#06031A",
                // value === 1 ? "linear-gradient(212.38deg, #665582 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg, #997D7B 0%, rgba(153, 125, 123, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/list/l2`}>
                  <span className={`${styles[`all-drink-list`]}`}>
                    전체 {drinktype[1]} 보기<KeyboardArrowRightIcon sx={{ color: "white" }}></KeyboardArrowRightIcon>
                  </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {whiskyList.slice(0, whiskyItemsToShow).map(({ id, img, name }, index) => (
                    <div key={index} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/l2/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "100%" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>
                            {name.length > 15 ? `${name.substring(0, 15)}...` : name}
                          </div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoadingMoreWhiskys && <div>Loading...</div>}
                  {!isLoadingMoreWhiskys && whiskyCurPageNumber < whiskyTotalPage - 1 && (
                    <a className={`${styles["more-drink-btn"]}`} onClick={handleShowMoreWhiskyItems}>
                      더보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div
              style={{
                background: "#06031A",
                // value === 2 ? "linear-gradient(212.38deg, #665582 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg,  #421F3C 0%, rgba(153, 125, 123, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/list/l1`}>
                  <span className={`${styles[`all-drink-list`]}`}>
                    전체 {drinktype[2]} 보기 <KeyboardArrowRightIcon sx={{ color: "white" }}></KeyboardArrowRightIcon>
                  </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {wineList.slice(0, wineItemsToShow).map(({ id, img, name }, index) => (
                    <div key={index} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/l1/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "100%" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>
                            {name.length > 15 ? `${name.substring(0, 15)}...` : name}
                          </div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoadingMoreWines && <div>Loading...</div>}
                  {!isLoadingMoreWines && wineCurPageNumber < wineTotalPage - 1 && (
                    <a className={`${styles["more-drink-btn"]}`} onClick={handleShowMoreWineItems}>
                      더보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div
              style={{
                background: "#06031A",
                // value === 3 ? "linear-gradient(212.38deg, #665582 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg, #4E3415 0%, rgba(78, 52, 21, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/list/l4`}>
                  <span className={`${styles[`all-drink-list`]}`}>
                    전체 {drinktype[3]} 보기 <KeyboardArrowRightIcon sx={{ color: "white" }}></KeyboardArrowRightIcon>
                  </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {koreanList.slice(0, koreanItemsToShow).map(({ id, img, name }, index) => (
                    <div key={index} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/l4/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "100%" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>
                            {name.length > 15 ? `${name.substring(0, 15)}...` : name}
                          </div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoadingMoreKoreans && <div>Loading...</div>}
                  {!isLoadingMoreKoreans && koreanCurPageNumber < koreanTotalPage - 1 && (
                    <a className={`${styles["more-drink-btn"]}`} onClick={handleShowMoreKoreanItems}>
                      더보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <div
              style={{
                background: "#06031A",
                // value === 4 ? "linear-gradient(212.38deg, #665582 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg, #9D615F 0%, rgba(157, 97, 95, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/list/l3`}>
                  <span className={`${styles[`all-drink-list`]}`}>
                    전체 {drinktype[4]} 보기 <KeyboardArrowRightIcon sx={{ color: "white" }}></KeyboardArrowRightIcon>
                  </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {beerList.slice(0, beerItemsToShow).map(({ id, img, name }, index) => (
                    <div key={index} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/l3/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "100%" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>
                            {name.length > 15 ? `${name.substring(0, 15)}...` : name}
                          </div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoadingMoreBeers && <div>Loading...</div>}
                  {!isLoadingMoreBeers && beerCurPageNumber < beerTotalPage - 1 && (
                    <a className={`${styles["more-drink-btn"]}`} onClick={handleShowMoreBeerItems}>
                      더보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </ThemeProvider>
  );
}
