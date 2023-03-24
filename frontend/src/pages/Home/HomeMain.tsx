import MainTab from "@/components/Home/MainTab/MainTab";
import { Link } from "react-router-dom";
import HometenderBanner from "@/components/Home/Banner/HometenderBanner";
import WeatherBanner from "@/components/Home/Banner/WeatherBanner";
import DrinkBtiBanner from "@/components/Home/Banner/DrinkBtiBanner";
import Slider from "react-slick";
import styles from "@/pages/Home/HomeMain.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const banner = [<HometenderBanner />, <WeatherBanner />, <DrinkBtiBanner />];

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
        <div>취향입력폼</div>
      </Link>
      <br />
      <Link to={`/login`}>
        <div>로그인</div>
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
