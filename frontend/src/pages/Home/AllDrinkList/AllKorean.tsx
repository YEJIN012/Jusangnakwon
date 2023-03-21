import styles from "@/pages/Home/AllDrinkList/AllCocktail.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllKorean = () => {
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
      name: "새콤한와인",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/300/?random",
      name: "시큼한와인",
    },
    {
      id: 7,
      img: "https://picsum.photos/300/300/?random",
      name: "매콤한와인",
    },
    {
      id: 8,
      img: "https://picsum.photos/300/300/?random",
      name: "씁쓸한와인",
    },
    {
      id: 9,
      img: "https://picsum.photos/300/300/?random",
      name: "텁텁한와인",
    },
    {
      id: 10,
      img: "https://picsum.photos/300/300/?random",
      name: "짭짤한와인",
    },
    {
      id: 11,
      img: "https://picsum.photos/300/300/?random",
      name: "밋밋한와인",
    },
    {
      id: 12,
      img: "https://picsum.photos/300/300/?random",
      name: "느끼한와인",
    },
  ];

  return (
    <div className={`${styles["container"]}`}>
      <h3>전통주</h3>
      <Link to={`/playground/guide`}>
      <a>전통주 입문가이드 바로가기 ▶ </a>
      </Link>
      <ul className={`${styles["drink-list"]}`}>
        {dummyList.map((wine) => (
          <li key={wine.id}>
            <div>
              <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }}></img>
              <p className={`${styles["drink-name"]}`}>{wine.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllKorean;
