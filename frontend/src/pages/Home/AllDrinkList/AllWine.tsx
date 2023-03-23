import styles from "@/pages/Home/AllDrinkList/AllCocktail.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AllWine = () => {
  const navigate = useNavigate();
  const dummyList = [
    {
      id: 1,
      img: "https://picsum.photos/300/300/?random",
      name: "콥케",
      drinktype: "l6"
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300/?random",
      name: "샌드맨",
      drinktype: "l6"
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300/?random",
      name: "맛있는와인",
      drinktype: "l6"
    },
    {
      id: 4,
      img: "https://picsum.photos/300/300/?random",
      name: "달콤한와인",
      drinktype: "l6"
    },
    {
      id: 5,
      img: "https://picsum.photos/300/300/?random",
      name: "새콤한와인",
      drinktype: "l6"
    },
    {
      id: 6,
      img: "https://picsum.photos/300/300/?random",
      name: "시큼한와인",
      drinktype: "l6"
    },
    {
      id: 7,
      img: "https://picsum.photos/300/300/?random",
      name: "매콤한와인",
      drinktype: "l6"
    },
    {
      id: 8,
      img: "https://picsum.photos/300/300/?random",
      name: "씁쓸한와인",
      drinktype: "l6"
    },
    {
      id: 9,
      img: "https://picsum.photos/300/300/?random",
      name: "텁텁한와인",
      drinktype: "l6"
    },
    {
      id: 10,
      img: "https://picsum.photos/300/300/?random",
      name: "짭짤한와인",
      drinktype: "l6"
    },
    {
      id: 11,
      img: "https://picsum.photos/300/300/?random",
      name: "밋밋한와인",
      drinktype: "l6"
    },
    {
      id: 12,
      img: "https://picsum.photos/300/300/?random",
      name: "느끼한와인",
      drinktype: "l6"
    },
  ];

  return (
    <div className={`${styles["container"]}`}>
      <h3>와인</h3>
      <Link to={`/playground/guide`}>
      <a>와인 입문가이드 바로가기 ▶ </a>
      </Link>
      <ul className={`${styles["drink-list"]}`}>
        {dummyList.map((wine) => (
          <li key={wine.id}>
            <div>
              <img src={wine.img} style={{ maxWidth: "100%", height: "auto" }} onClick={() => navigate(`/details/${wine.drinktype}/${wine.id}`)}></img>
              <p className={`${styles["drink-name"]}`}>{wine.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllWine;
