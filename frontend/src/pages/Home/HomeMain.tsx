import MainTab from "@/components/Home/MainTab/MainTab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HometenderBanner from "@/components/Home/Banner/HometenderBanner";
import WeatherBanner from "@/components/Home/Banner/WeatherBanner";
import DrinkBtiBanner from "@/components/Home/Banner/DrinkBtiBanner";
import Slider from "react-slick";
import styles from "@/pages/Home/HomeMain.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeatherAniBanner from "@/components/Home/Banner/WeatherAniBanner";
import { apiGetRandomlyRecommendedHometender } from "@/api/home";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  // fade: true,
};

interface ApiData {
  success?: boolean;
  error?: string | null;
  body?: {
    id: number;
    name: number;
    img: string;
    ingredients: string[];
  };
}
const HomeMain = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const [recommendedHometender, setRecommendedHometender] = useState<ApiData | null>(null);
  const banner = [<HometenderBanner {...recommendedHometender} />, <WeatherAniBanner />, <DrinkBtiBanner />];
  console.log(axios.defaults.headers.common["Authorization"]);
  useEffect(() => {
    if (recommendedHometender === null) {
      apiGetRandomlyRecommendedHometender()
        .then((r) => {
          if (r?.data.success) {
            setRecommendedHometender(r?.data);
            console.log(`hometender: ${r?.data}`);
          } else {
            throw new Error(r?.data.error ?? "Failed to fetch data");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <div className={`${styles[`container`]}`}>
      <Link to={`/tasteform`}>
        <span>취향입력폼</span>
      </Link>
      <br />
      {userInfo.isLogin ? (
        <></>
      ) : (
        <Link to={`/login`}>
          <span>로그인</span>
        </Link>
      )}
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
      {userInfo.isLogin ? 
        <div className={`${styles[`text-wrap`]}`}>
        <h3>{userInfo.username}님의 취향</h3>
        <p>{userInfo.username}님의 취향에 맞는 술을 주종별로 추천해드려요!</p>
      </div>
      :
      <div className={`${styles[`text-wrap`]}`}>
      <h3>주상낙원의 Best 술</h3>
      <p>주종별로 추천해드려요!</p>
      </div>
      }
      <MainTab />
    </div>
  );
};

export default HomeMain;
