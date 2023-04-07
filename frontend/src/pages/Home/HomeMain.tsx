import MainTab from "@/components/Home/MainTab/MainTab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HometenderBanner from "@/components/Home/Banner/HometenderBanner";
import DrinkBtiBanner from "@/components/Home/Banner/DrinkBtiBanner";
import Slider from "react-slick";
import styles from "@/pages/Home/HomeMain.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeatherAniBanner from "@/components/Home/Banner/WeatherAniBanner";
import { apiGetRandomlyRecommendedHometender, apiGetWeather } from "@/api/home";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  // fade: true,
};

export interface HometenderApiData {
  success?: boolean;
  error?: string | null;
  body?: {
    id: number;
    name: number;
    img: string;
    ingredients: string[];
  };
}

export interface WeatherApiData {
  temperature?: number | undefined;
  message?: string | undefined;
  type?: string | undefined;
}
const HomeMain = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const [recommendedHometender, setRecommendedHometender] = useState<HometenderApiData | null>(null);
  const [weather, setWeather] = useState<WeatherApiData | null>(null);
  const banner = [<HometenderBanner {...recommendedHometender} />];
  //console.log(axios.defaults.headers.common["Authorization"]);
  useEffect(() => {
    if (recommendedHometender === null) {
      apiGetRandomlyRecommendedHometender()
        .then((r) => {
          if (r?.data.success) {
            setRecommendedHometender(r?.data);
            //console.log(`hometender: ${r?.data}`);
          } else {
            throw new Error(r?.data.error ?? "Failed to fetch data");
          }
        })
        .catch((e) => {
          //console.log(e); 
        });
    }
    if (recommendedHometender === null) {
      //console.log("날씨호출");
      apiGetWeather()
        .then((r) => {
          if (r?.data.success) {
            setWeather(r.data.body);
          } else {
            throw new Error(r?.data.error ?? "Failed to fetch data");
          }
        })
        .catch((e) => {
          //console.log(e);
        });
    }
  }, []);

  return (
    <div className={`${styles[`container`]}`}>
      {/* <Link to={`/tasteform`}>
        <span>취향입력폼</span>
      </Link> */}
      <br />
      {/* {userInfo.isLogin ? (
        <></>
      ) : (
        <Link to={`/login`}>
          <span>로그인</span>
        </Link>
      )} */}
      <div className={`${styles[`banner-box`]}`}>{weather != null ? <WeatherAniBanner {...weather} /> : <></>}</div>
      <div className={`${styles[`banner-box`]}`}>
        <Slider {...settings} className={`${styles[`slider`]}`}>
          {banner.map((item, index) => {
            // HometenderBanner일 때만 props를 전달
            if (item.type === HometenderBanner) {
              return (
                <div key={index}>
                  <HometenderBanner key={index} {...recommendedHometender} />
                </div>
              );
            } else {
              return <div key={index}>{item}</div>;
            }
          })}
        </Slider>
      </div>
      {userInfo.isLogin ? (
        <div className={`${styles[`main-content-container`]}`}>
          <div className={`${styles[`text-wrap`]}`}>
            <div className={`${styles[`username-text-wrap`]}`}>
              <h3 className={`${styles[`main-page-username`]}`}>{userInfo.username}</h3>
              <h3>님의 취향</h3>
            </div>
            <p>{userInfo.username}님의 취향에 맞는 술을 주종별로 추천해드려요!</p>
          </div>
        </div>
      ) : (
        <div className={`${styles[`main-content-container`]}`}>
          <div className={`${styles[`text-wrap`]}`}>
            <h3>주상낙원의 Best 술</h3>
            <p>주종별로 추천해드려요!</p>
          </div>
        </div>
      )}
      <MainTab />
    </div>
  );
};

export default HomeMain;
