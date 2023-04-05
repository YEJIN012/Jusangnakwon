import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./RecommendCarousel.module.css";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";
import { EnglishToCode } from "@/pages/Commons/Write/WriteReview";

interface RecommendList {
  recommendList: {
    id: number;
    type: string;
    img: string;
    name: string;
    ingredients: string[];
    explain: string;
  }[];
}

const RecommendCarousel = (props: RecommendList) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1
    //     }
    //   }
    // ]
  };

  // 정규 표현식 사용해서 숫자 나오기 전까지 자르는 함수
  function extractStringBeforeNumber(str: string): string {
    const match = str.match(/^[^\d]*/);
    if (match) {
      return match[0];
    } else {
      return "";
    }
  }

  return (
    <Slider {...settings} className={`${styles[`carousel`]}`}>
      {props.recommendList.map((item) => (
        <div key={item.id}>
          <Link to={`/details/${EnglishToCode[item.type]}/${item.id}`}>
            <div className={`${styles[`box`]}`}>
              <img className={`${styles[`img-box`]}`} src={item.img} />
              <div className={`${styles[`info`]}`}>
                <div className={`${styles[`drink-name`]}`}>{item.name}</div>
                {/* {item.ingredients ? item.ingredients.join(", ") : ""} */}
                <div className={`${styles[`drink-ingre`]}`}>
                  {item.ingredients != null && item.ingredients.length > 1
                    ? item.ingredients.slice(0, 4).map((material, index) => {
                        return (
                          <p key={index} className={`${styles[`hometender-banner-material`]}`}>
                            {extractStringBeforeNumber(material)}
                          </p>
                        );
                      })
                    : item.ingredients}
                </div>
                {/* <Ingredients ingredients={item.ingredients}></Ingredients> */}
                <div className={`${styles[`drink-explin`]}`}>
                  {item.explain ? item.explain.substring(0, 15) + (item.explain.length > 15 ? "..." : "") : ""}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default RecommendCarousel;
