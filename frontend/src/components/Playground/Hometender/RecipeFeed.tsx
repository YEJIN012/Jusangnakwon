import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./RecipeFeed.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface RecipeList {
  recipeList: {
    id: number;
    type:string;
    img: string;
    name: string;
    likes: number;
  }[];
}

export default function RecipeFeed(props: RecipeList) {
  const navigate = useNavigate()
  const location = useLocation()
  const onClickImg = (type: string, id : number) => {
    navigate(`/details/${type}/${id}`, { state: { from: location.pathname } })
  }

  return (
    <div className={`${styles[`drink-list-wrap`]}`}>
      <ul className={`${styles[`tab-drink-list`]}`}>
        {props.recipeList.map((item) => (
          <li key={item.id}>
            <div className={styles["item-container"]}>
              <img src={item.img} onClick={() => onClickImg(item.type,item.id)}></img>
              <div className={styles["item-title"]}>
                <div>{item.name}</div>
                <div className={styles["like-box"]}>
                  <FavoriteBorderIcon />
                  {item.likes}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
