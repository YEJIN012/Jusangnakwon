import styles from "@/components/Home/Banner/HometenderBanner.module.css";
import cocktailimg from "/assets/stcocktail.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGetRandomlyRecommendedHometender } from "@/api/home";

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

// interface ApiData {
//   success: boolean;
//   error: string | null;
//   body: {
//     id: number;
//     name: number;
//     img: string;
//     materials: string[];
//   } | null;
// }

interface ApiData {
  success?: boolean;
  error?: string | null;
  body?: {
    id: number;
    name: number;
    img: string;
    materials: string[];
  };
}
export default function HometenderBanner(props: ApiData | null) {
  // const [recommendedHometender, setRecommendedHometender] = useState<ApiData | null>(null);
  // useEffect(() => {
  //   if (recommendedHometender === null) {
  //     apiGetRandomlyRecommendedHometender()
  //       .then((r) => {
  //         if (r?.data.success) {
  //           setRecommendedHometender(r?.data);
  //           console.log(`hometender: ${r?.data}`);
  //         } else {
  //           throw new Error(r?.data.error ?? "Failed to fetch data");
  //         }
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // }, []);
  const recommendedHometender = props?.body;

  return (
    <Link to={`/playground/hometender`}>
      <div className={`${styles[`container`]}`}>
        {/* <ul>
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
        </ul> */}
        {recommendedHometender ? (
          <div>
            <img
              src={recommendedHometender.img}
              style={{ height: "70px", width: "70px" }}
              alt="추천 칵테일 이미지"
            ></img>
            {recommendedHometender.name}
            {recommendedHometender.materials != null && recommendedHometender.materials.length > 1
              ? recommendedHometender.materials.map((material) => {
                  return <div>{material}</div>;
                })
              : recommendedHometender.materials}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
