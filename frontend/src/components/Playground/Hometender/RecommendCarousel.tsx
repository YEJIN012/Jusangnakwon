import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./RecommendCarousel.module.css";

interface RecommendList {
  recommendList: {
    id: number;
    img: string;
    name: string;
    ingredients: string[];
    explan: string;
  }[];
}

export default function RecommendCarousel(props: RecommendList) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
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

  return (
    <Slider {...settings} className={`${styles[`carousel`]}`}>
      {props.recommendList.map((item) => (
        <div key={item.id}>
          <Link to={`${item.id}`} style={{ textDecoration: "none" }}>
            <div className={`${styles[`box`]}`}>
              <img className={`${styles[`img-box`]}`} src={item.img} />
              <div className={`${styles[`info`]}`}>
                {item.name}
                <div className={`${styles[`row-container`]}`}>
                  {item.ingredients.map((ingredient) => (
                    <div className={`${styles[`ingredient`]}`}>{ingredient}</div>
                  ))}
                </div>
                <div>{item.explan.substring(0, 15)}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
