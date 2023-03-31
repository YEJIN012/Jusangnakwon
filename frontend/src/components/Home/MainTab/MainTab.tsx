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
import { makeStyles } from "@material-ui/core/styles";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import { apiGetNotLoginRecommendedByType } from "@/api/home";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface WineItem {
  id: string;
  name: string;
  img: string;
  liquorType: string;
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

const useStyles = makeStyles((theme) => ({
  selectedTab: {
    "&.css-1e884rx-MuiButtonBase-root-MuiTab-root.Mui-selected": {
      backgroundColor: "#997D7B",
      color: "white",
    },
    "&.css-x31445-MuiButtonBase-root-MuiTab-root.Mui-selected": {
      backgroundColor: "#421F3C",
      color: "white",
    },
    "&.css-ljmcya-MuiButtonBase-root-MuiTab-root.Mui-selected": {
      backgroundColor: "#4E3415",
      color: "white",
    },
    "&.css-1qobvqn-MuiButtonBase-root-MuiTab-root.Mui-selected": {
      backgroundColor: "#9D615F",
      color: "white",
    },
  },
}));

// api 요청 테스트
// const [recommendedList, setRecommendedList] = useState([]);

// const rs = "l2";
// useEffect(() => {
//   apiGetNotLoginRecommendedByType(rs, 1).then((r) => {
//     console.log(r);
//   });
// }, []);

export default function MainTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  console.log(value);
  const [cocktailItemsToShow, setCocktailItemsToShow] = useState(4);
  const [whiskeyItemsToShow, setwhiskeyItemsToShow] = useState(4);

  const [wineItemsToShow, setwineItemsToShow] = useState(6);
  const [wineList, setWineList] = useState<WineItem[]>([]);
  const [wineListToShow, setWineListToShow] = useState<WineItem[]>([]);
  const [isLoadingMoreWines, setIsLoadingMoreWines] = useState(false);
  const [curPageNumber, setCurPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [koreanItemsToShow, setkoreanItemsToShow] = useState(4);
  const [beerItemsToShow, setbeerItemsToShow] = useState(4);
  const navigate = useNavigate();
  const classes = useStyles();

  const drinktype = ["칵테일", "위스키", "와인", "전통주", "맥주"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  useEffect(() => {
    apiGetNotLoginRecommendedByType("l1", 1)
      .then((res: any) => {
        console.log(res);
        if (res.data.success) {
          const wineList = res.data.body.content.filter((item: any) => item.liquorType === "WINE");
          setWineList(wineList);
          setWineListToShow(wineList.slice(0, wineItemsToShow));
          setTotalPage(res.data.body.totalPage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [value]);

  // const cocktailListToShow = cocktailList.slice(0, cocktailItemsToShow);

  const loadMoreWines = () => {
    setIsLoadingMoreWines(true);

    const nextPageNumber = curPageNumber + 1;

    // apiGetNotLoginRecommendedByType("l1", nextPageNumber)
    //   .then((res: any) => {
    //     if (res.data.success) {
    //       // const nextWineList = res.data.body.content.filter((item: any) => item.liquorType === "WINE");
    //       setWineList((prevList) => [...prevList, ...res.data.body.content]);
    //       console.log(wineList)
    //       // setWineListToShow((prevList) => [...prevList, ...nextWineList]);
    //       setCurPageNumber(res.data.body.curPageNumber);
    //       setTotalPage(res.data.body.totalPage);
    //       // setWineList([...wineList, ...nextWineList]);
    //       // setwineItemsToShow((prevItemsToShow) => prevItemsToShow + 6);
    //       // setWineListToShow((prevListToShow) => [...prevListToShow, ...nextWineList.slice(-6)]);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     setIsLoadingMoreWines(false);
    //   });
  };

  // const isShowMoreWineButton = curPageNumber < res.data.body.totalPage;

  const dummyList = [
    {
      id: 1,
      img: "https://picsum.photos/300/300/?random",
      name: "콥케",
      drinktype: "l6",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300/?random",
      name: "샌드맨",
      drinktype: "l6",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300/?random",
      name: "맛있는와인",
      drinktype: "l6",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
      drinktype: "l6",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/300/?random",
      name: "새콤한와인",
      drinktype: "l6",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/300/?random",
      name: "시큼한와인",
      drinktype: "l6",
    },
    {
      id: 7,
      img: "https://picsum.photos/300/300/?random",
      name: "매콤한와인",
      drinktype: "l6",
    },
    {
      id: 8,
      img: "https://picsum.photos/300/300/?random",
      name: "씁쓸한와인",
      drinktype: "l6",
    },
    {
      id: 9,
      img: "https://picsum.photos/300/300/?random",
      name: "텁텁한와인",
      drinktype: "l6",
    },
    {
      id: 10,
      img: "https://picsum.photos/300/300/?random",
      name: "짭짤한와인",
      drinktype: "l6",
    },
    {
      id: 11,
      img: "https://picsum.photos/300/300/?random",
      name: "밋밋한와인",
      drinktype: "l6",
    },
    {
      id: 12,
      img: "https://picsum.photos/300/300/?random",
      name: "느끼한와인",
      drinktype: "l6",
    },
  ];

  const themes = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            minWidth: "unset",
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
            // sx={{bgcolor: '#06031A', color: 'white' }}
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
                  {...a11yProps(index)}
                  sx={{
                    // bgcolor: value === 0 ? "#7B334E" : "#06031A",
                    // 칵테일 버튼 선택됐을 때 스타일
                    bgcolor: value === index ? "#06031A" : "#06031A",
                    border: value === index ? "solid 2px #8DFFFF" : "solid 2px transparent",
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
            {/* <Tab
              label="칵테일"
              {...a11yProps(0)}
              sx={{
                // bgcolor: value === 0 ? "#7B334E" : "#06031A",
                // 칵테일 버튼 선택됐을 때 스타일
                bgcolor: value === 0 ? "#06031A" : "#06031A",
                border: value === 0 ? "solid 2px #8DFFFF" : "solid 2px transparent",
                // boxShadow: value === 0 ? '0 0 10px 5px #8DFFFF':"#06031A",

                // box-shadow: 0 0 10px 5px #8DFFFF
                fontSize: { xs: 12, md: 16 },
                whiteSpace: "nowrap",
                // "&:hover": { bgcolor: "#7B334E" },
              }}
              disableRipple
            /> */}
            {/* <Tab
              label="위스키"
              classes={{
                // root: classes.tab,
                selected: classes.selectedTab,
              }}
              {...a11yProps(1)}
              sx={{
                // bgcolor: value === 1 ? "#06031A" : "#06031A",
                bgcolor: value === 1 ? "#06031A" : "#06031A",
                border: value === 1 ? "solid 2px #8DFFFF" : "solid 2px transparent",
                // boxShadow: value === 1 ? '0 0 10px 5px #8DFFFF':"#06031A",
                // border: value === 1 ? "solid 2px #FF9E80" : "solid 2px transparent",
                fontSize: { xs: 12, md: 16 },
                whiteSpace: "nowrap",
                // "&:hover": { bgcolor: "#997D7B" },
              }}
              disableRipple
            />
            <Tab
              label="와인"
              classes={{
                // root: classes.tab,
                selected: classes.selectedTab,
              }}
              {...a11yProps(2)}
              sx={{
                // bgcolor: value === 0 ? "#06031A" : "#06031A",
                bgcolor: value === 2 ? "#06031A" : "#06031A",
                border: value === 2 ? "solid 2px #8DFFFF" : "solid 2px transparent",
                // boxShadow: value === 2 ? '0 0 10px 5px #8DFFFF':"#06031A",
                // border: value === 2 ? "solid 2px #00ffff" : "solid 2px transparent",
                fontSize: { xs: 12, md: 16 },
                whiteSpace: "nowrap",
                // "&:hover": { bgcolor: "#421F3C" },
              }}
              disableRipple
            />
            <Tab
              label="전통주"
              classes={{
                // root: classes.tab,
                selected: classes.selectedTab,
              }}
              {...a11yProps(3)}
              sx={{
                // bgcolor: value === 0 ? "#06031A" : "#06031A",
                bgcolor: value === 3 ? "#06031A" : "#06031A",
                border: value === 3 ? "solid 2px #8DFFFF" : "solid 2px transparent",
                // boxShadow: value === 3 ? '0 0 10px 5px #8DFFFF':"#06031A",
                // border: value === 3 ? "solid 2px #00ffff" : "solid 2px transparent",
                fontSize: { xs: 12, md: 16 },
                whiteSpace: "nowrap",
                // "&:hover": { bgcolor: "#4E3415" },
              }}
              disableRipple
            />
            <Tab
              label="맥주"
              classes={{
                // root: classes.tab,
                selected: classes.selectedTab,
              }}
              {...a11yProps(4)}
              sx={{
                // bgcolor: value === 0 ? "#06031A" : "#06031A",
                bgcolor: value === 4 ? "#06031A" : "#06031A",
                border: value === 4 ? "solid 2px #8DFFFF" : "solid 2px transparent",
                // boxShadow: value === 4 ? '0 0 10px 5px #8DFFFF':"#06031A",
                // border: value === 4 ? "solid 2px #00ffff" : "solid 2px transparent",
                fontSize: { xs: 12, md: 16 },
                whiteSpace: "nowrap",
                // "&:hover": { bgcolor: "#9D615F" },
              }}
              disableRipple
            /> */}
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
                background: value === 0 ? "#06031A" : "black",
                // border:"solid 2px",
                // "linear-gradient(212.38deg, #A0425F 6.22%, rgba(125, 62, 109, 0) 96.93%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/drinklist/cocktail`}>
                  <span className={`${styles[`all-drink-list`]}`}> 전체 {drinktype[0]} 보기 ▶ </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {dummyList.slice(0, cocktailItemsToShow).map(({ id, img, name, drinktype }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* {cocktailListToShow.map(({ id, img, name }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
                <a
                  onClick={() => {
                    if (value === 0) {
                      setCocktailItemsToShow(cocktailItemsToShow + 2);
                    }
                  }}
                  className={`${styles["more-drink-btn"]}`}
                >
                  더보기
                </a>

                {/* {isShowMoreWineutton && (
                  <a
                    onClick={loadMoreWines}
                    className={`${styles["more-drink-btn"]}`}
                    style={{ opacity: isLoadingMoreWines ? 0.5 : 1 }}
                  >
                    {isLoadingMoreWines ? "로딩중..." : "더보기"}
                  </a>
                )} */}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div
              style={{
                background: value === 1 ? "#06031A" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg, #997D7B 0%, rgba(153, 125, 123, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/drinklist/whiskey`}>
                  <span className={`${styles[`all-drink-list`]}`}> 전체 {drinktype[1]} 보기 ▶ </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {dummyList.slice(0, whiskeyItemsToShow).map(({ id, img, name, drinktype }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  onClick={() => {
                    if (value === 1) {
                      setwhiskeyItemsToShow(whiskeyItemsToShow + 2);
                    }
                  }}
                  className={`${styles["more-drink-btn"]}`}
                >
                  더보기
                </a>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div
              style={{
                background: value === 2 ? "#06031A" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg,  #421F3C 0%, rgba(153, 125, 123, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/drinklist/wine`}>
                  <span className={`${styles[`all-drink-list`]}`}> 전체 {drinktype[2]} 보기 ▶ </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {wineList.slice(0, wineItemsToShow).map(({ id, img, name }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* {dummyList.slice(0, wineItemsToShow).map(({ id, img, name, drinktype }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
                {wineList.length > wineItemsToShow && (
                  <a
                    onClick={() => setwineItemsToShow((prevCount) => prevCount + 6)}
                    className={`${styles["more-drink-btn"]}`}
                  >
                    더보기
                  </a>
                )}
                {/* <a
                  onClick={() => {
                    if (value === 2) {
                      setwineItemsToShow(wineItemsToShow + 2);
                    }
                  }}
                  className={`${styles["more-drink-btn"]}`}
                >
                  더보기
                </a> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div
              style={{
                background: value === 3 ? "#06031A" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg, #4E3415 0%, rgba(78, 52, 21, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/drinklist/korean`}>
                  <span className={`${styles[`all-drink-list`]}`}> 전체 {drinktype[3]} 보기 ▶ </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {dummyList.slice(0, koreanItemsToShow).map(({ id, img, name, drinktype }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  onClick={() => {
                    if (value === 3) {
                      setkoreanItemsToShow(koreanItemsToShow + 2);
                    }
                  }}
                  className={`${styles["more-drink-btn"]}`}
                >
                  더보기
                </a>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <div
              style={{
                background: value === 4 ? "#06031A" : "black",
                // border:"solid 2px",
                // "linear-gradient(180deg, #9D615F 0%, rgba(157, 97, 95, 0) 100%)" : "black",
                paddingTop: "5%",
                paddingRight: "3%",
                paddingLeft: "3%",
                // paddingBottom: "30px",
              }}
            >
              <div className={`${styles[`all-drink-list-btn`]}`}>
                <Link to={`/drinklist/beer`}>
                  <span className={`${styles[`all-drink-list`]}`}> 전체 {drinktype[4]} 보기 ▶ </span>
                </Link>
              </div>
              <div className={`${styles[`drink-list-wrap`]}`}>
                <div className={`${styles[`tab-drink-list`]}`}>
                  {dummyList.slice(0, beerItemsToShow).map(({ id, img, name, drinktype }) => (
                    <div key={id} className={`${styles[`tab-drink-list-item`]}`}>
                      <div className={styles["img-container"]}>
                        <Link to={`/details/${drinktype}/${id}`}>
                          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                        </Link>
                        <div className={styles["drink-label-wrap"]}>
                          <div className={styles["drink-name"]}>{name}</div>
                          <BookmarkBorder fontSize="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  onClick={() => {
                    if (value === 4) {
                      setbeerItemsToShow(beerItemsToShow + 2);
                    }
                  }}
                  className={`${styles["more-drink-btn"]}`}
                >
                  더보기
                </a>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </ThemeProvider>
  );
}
