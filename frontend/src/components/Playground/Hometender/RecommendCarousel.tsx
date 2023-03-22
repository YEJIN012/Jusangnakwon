import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./RecommendCarousel.module.css";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";

interface RecommendList {
  recommendList: {
    id: number;
    type:string;
    img: string;
    name: string;
    ingredients: string[];
    explan: string;
  }[];
}

export default function RecommendCarousel(props: RecommendList) {
  const navigate = useNavigate()
  const onClickImg = (type: string, id : number) => {
    navigate(`/details/${type}/${id}`, { state: { from: location.pathname } })
  }
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

  return (
    <Slider {...settings} className={`${styles[`carousel`]}`}>
      {props.recommendList.map((item) => (
        <div key={item.id}>
            <div className={`${styles[`box`]}`} onClick={() => onClickImg(item.type,item.id)}>
              <img className={`${styles[`img-box`]}`} src={item.img} />
              <div className={`${styles[`info`]}`}>
                {item.name}
                <Ingredients ingredients={item.ingredients}></Ingredients>
                <div>{item.explan.substring(0, 15)}</div>
              </div>
            </div>
        </div>
      ))}
    </Slider>
  );
}
