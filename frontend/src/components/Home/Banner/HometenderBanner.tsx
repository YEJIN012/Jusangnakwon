import styles from "@/components/Home/Banner/HometenderBanner.module.css";
import cocktailimg from "/assets/stcocktail.png";
import { Link } from "react-router-dom";

const dummyList = [
  {
    id: 1,
    name: "햄버거공주",
    ratings: 4,
    date: "2023.12.23",
    img: cocktailimg,
    explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  // {
  //   id: 2,
  //   name: "한강보내주",
  //   ratings: 1,
  //   date: "2023.12.23",
  //   img: "https://picsum.photos/300/300/?random",
  //   explan: "윽 별로",
  // },
  // {
  //   id: 3,
  //   name: "자전거태워주",
  //   ratings: 3,
  //   date: "2023.12.23",
  //   img: "https://picsum.photos/300/300/?random",
  //   explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  // },
];

export default function HometenderBanner() {
  return (
    <div className={`${styles[`container`]}`}>
      <ul>
        {dummyList.map(({ id, img, name }) => (
          <li key={id} className={`${styles[`content-wrap`]}`}>
            <img src={img} style={{ maxWidth: "30%", height: "auto" }} />
            <div className={`${styles[`text-wrap`]}`}>
              <h4>당신을 위한 홈텐딩 레시피</h4>
              <p className={`${styles[`drink-name`]}`}>{name}</p>
              <p className={`${styles[`drink-ingre`]}`}>재료: 햄버거, 소주, 토닉워터</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
