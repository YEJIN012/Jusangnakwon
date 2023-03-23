import styles from "./Write.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Rating, Select } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";
import { useState } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

// interface FormData {
//   type: string,
//   name: string
// }

const WriteQuestion = () => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
  });
  // const handleChange = (e: //ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  // };
  // const handleSubmit = (formData) => {}

  return (
    <div>
    <form>
      {/* onSubmit={handleSubmit} */}

      <div className={`${styles[`row-container`]}`}>
        사진
        <div style={{ fontSize: "0.8rem", color: "rgb(149, 149, 149)" }}>(선택)</div>
      </div>
      <div className={`${styles[`camera-box`]}`}>
        <PhotoCameraIcon sx={{ fontSize: { xs: 25, sm: 35, md: 40, lg: 50 } }} />
        </div>
        

      <div>
        {/* 술상세페이지에서 리뷰작성으로 넘어오면 */}
        {/* navigate state로 주종 같이 넘겨줘서 select value에 담아놓기  */}
        <InputLabel id="type">주종</InputLabel>
        <Select
          labelId="type"
          id="demo-simple-select-standard"
          value={formData.type}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}

          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div>
        술이름
        <Search />
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        별점
        <Rating></Rating>
      </div>
      <div>
        공개여부
        <button>공개</button>
        <button>비공개</button>
      </div>
    </form>
          </div>
  );
};

export default WriteQuestion;
