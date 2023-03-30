import MainTab from "@/components/Home/MainTab/MainTab";
import { Link } from "react-router-dom";
import HometenderBanner from "@/components/Home/Banner/HometenderBanner";
import WeatherBanner from "@/components/Home/Banner/WeatherBanner";
import DrinkBtiBanner from "@/components/Home/Banner/DrinkBtiBanner";
import Slider from "react-slick";
import styles from "@/pages/Home/HomeMain.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeatherAniBanner from "@/components/Home/Banner/WeatherAniBanner";


// const banner = [<HometenderBanner />, <WeatherBanner />, <DrinkBtiBanner />];
const banner = [<HometenderBanner />, <WeatherAniBanner />, <DrinkBtiBanner />];

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

const HomeMain = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <Link to={`/tasteform`}>
        <span>취향입력폼</span>
      </Link>
      <br />
      <Link to={`/login`}>
        <span>로그인</span>
      </Link>
      <div className={`${styles[`banner-box`]}`}>
        <Slider {...settings} className={`${styles[`slider`]}`}>
          {banner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Slider>
      </div>
      <div className={`${styles[`text-wrap`]}`}>
        <h3>나는멋쟁이호님의 취향</h3>
        <p>당신의 취향에 맞는 술을 주종별로 추천해드려요!</p>
      </div>
      <MainTab />
    </div>
  );
};

export default HomeMain;
