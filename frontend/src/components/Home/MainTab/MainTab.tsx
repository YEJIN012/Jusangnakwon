import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "@/components/Home/MainTab/MainTab.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
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
          <Typography>{children}</Typography>
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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const dummyList = [
    {
      id: 1,
      img: "https://picsum.photos/300/300/?random",
      name: "콥케",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300/?random",
      name: "샌드맨",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300/?random",
      name: "맛있는와인",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 7,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 8,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 9,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 10,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 11,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
    {
      id: 12,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#06031A", width: "100%", height: "500px", color: "white" }}>
      <AppBar position="static">
        <Tabs
          // sx={{bgcolor: '#06031A', color: 'white' }}
          sx={{
            bgcolor: "#06031A",
            "& .Mui-selected": {
              color: "white",
              bgcolor: "purple",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            "& .MuiTab-root": {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              border: "1px solid gray",
            },
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="칵테일" sx={{ fontSize: { xs: 12, md: 16 } }} {...a11yProps(0)} disableRipple />
          <Tab label="위스키" sx={{ fontSize: { xs: 12, md: 16 } }} {...a11yProps(1)} disableRipple />
          <Tab label="와인" sx={{ fontSize: { xs: 12, md: 16 } }} {...a11yProps(2)} disableRipple />
          <Tab label="전통주" sx={{ fontSize: { xs: 12, md: 16 } }} {...a11yProps(3)} disableRipple />
          <Tab label="맥주" sx={{ fontSize: { xs: 12, md: 16 } }} {...a11yProps(4)} disableRipple />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ backgroundColor: value === 0 ? "#A0425F" : "black" }}>
            <div className={`${styles[`all-drink-list-btn`]}`}>
              <a href="#none" className={`${styles[`all-drink-list`]}`}>
                {" "}
                전체 칵테일 보기 ▶{" "}
              </a>
            </div>
            <div className={`${styles[`drink-list-wrap`]}`}>
              <ul className={`${styles[`tab-drink-list`]}`}>
                {dummyList.map((wine) => (
                  <li key={wine.id}>
                    <div className={styles["img-container"]}>
                      <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }}></img>
                      <p>{wine.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div style={{ backgroundColor: value === 1 ? "#997D7B" : "black" }}>
            <div className={`${styles[`all-drink-list-btn`]}`}>
              <a href="#none" className={`${styles[`all-drink-list`]}`}>
                {" "}
                전체 위스키 보기 ▶{" "}
              </a>
            </div>
            <div className={`${styles[`drink-list-wrap`]}`}>
              <ul className={`${styles[`tab-drink-list`]}`}>
                {dummyList.map((wine) => (
                  <li key={wine.id}>
                    <div className={styles["img-container"]}>
                      <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }}></img>
                      <p>{wine.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div style={{ backgroundColor: value === 2 ? "#421F3C" : "black" }}>
            <div className={`${styles[`all-drink-list-btn`]}`}>
              <a href="#none" className={`${styles[`all-drink-list`]}`}>
                {" "}
                전체 와인 보기 ▶{" "}
              </a>
            </div>
            <div className={`${styles[`drink-list-wrap`]}`}>
              <ul className={`${styles[`tab-drink-list`]}`}>
                {dummyList.map((wine) => (
                  <li key={wine.id}>
                    <div className={styles["img-container"]}>
                      <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }}></img>
                      <p>{wine.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div style={{ backgroundColor: value === 3 ? "#4E3415" : "black" }}>
            <div className={`${styles[`all-drink-list-btn`]}`}>
              <a href="#none" className={`${styles[`all-drink-list`]}`}>
                {" "}
                전체 전통주 보기 ▶{" "}
              </a>
            </div>
            <div className={`${styles[`drink-list-wrap`]}`}>
              <ul className={`${styles[`tab-drink-list`]}`}>
                {dummyList.map((wine) => (
                  <li key={wine.id}>
                    <div className={styles["img-container"]}>
                      <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }}></img>
                      <p>{wine.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <div style={{ backgroundColor: value === 4 ? "#9D615F" : "black" }}>
            <div className={`${styles[`all-drink-list-btn`]}`}>
              <a href="#none" className={`${styles[`all-drink-list`]}`}>
                {" "}
                전체 맥주 보기 ▶{" "}
              </a>
            </div>
            <div className={`${styles[`drink-list-wrap`]}`}>
              <ul className={`${styles[`tab-drink-list`]}`}>
                {dummyList.map((wine) => (
                  <li key={wine.id}>
                    <div className={styles["img-container"]}>
                      <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }}></img>
                      <p>{wine.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
