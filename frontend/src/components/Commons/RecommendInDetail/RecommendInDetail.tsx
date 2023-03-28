import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from './RecommendInDetail.module.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface List {
  dummyList: {
    id: number;
    img: string;
    name: string;
    drinktype: string;
  }[];
}

const RecommendInDetail = (props: List) => {
  return (
    <div>
      <div className={`${styles[`title`]}`}>
        <h1>비슷한 술 추천</h1>
      </div>
      <div className={`${styles[`drink-list-wrap`]}`}>
        <ul className={`${styles[`tab-drink-list`]}`}>
          {props.dummyList.map(({ id, img, name, drinktype }) => (
            <li key={id}>
              <div className={styles["img-container"]}>
                <Link to={`/details/${drinktype}/${id}`}>
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
