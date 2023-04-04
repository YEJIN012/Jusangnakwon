import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./RecommendInDetail.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SimilarItem } from "@/pages/Commons/DrinkDetail/DrinkDetail";
import { EnglishToCode } from "@/pages/Commons/Write/WriteReview";

interface SimilarItems {
  similarItems?: SimilarItem[];
}

const RecommendInDetail = ({ similarItems }: SimilarItems) => {
  return (
    <div>
      <div className={`${styles[`title`]}`}>
        <h1>비슷한 술 추천</h1>
      </div>
      <div className={`${styles[`drink-list-wrap`]}`}>
        <ul className={`${styles[`tab-drink-list`]}`}>
          {similarItems?.map(({ id, img, name, liquorType }) => (
            <li key={id}>
              <div className={styles["img-container"]}>
                <Link to={`/details/${EnglishToCode[liquorType]}/${id}`}>
                  <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt={name} />
                  <p className={styles["drink-name"]}>{name}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendInDetail;
