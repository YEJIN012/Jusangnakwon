import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import StarIcon from "@mui/icons-material/Star";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styles from "./Write.module.css";
import ImageUpload from "@/components/Commons/ImageUpload/ImageUpload";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";

interface FormData {
  img: string;
  name: string;
  ingredients: string[];
  taste: { [key: string]: string | null };
  content: string;
  // isPrivate: boolean;
}

// 임의 리스트
const DrinkTypeList = {
  와인: "l1",
  전통주: "l2",
  맥주: "l3",
  위스키: "l4",
  칵테일: "l5",
  홈테일: "l6",
};

const WriteRecipe = () => {
  const [formData, setFormData] = useState<FormData>({
    img: "",
    name: "",
    ingredients: [],
    taste: {
      단맛: null,
      신맛: null,
      쓴맛: null,
      짠맛: null,
    },
    content: "",
    // isPrivate: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    // 제출 api호출
    navigate(-1);
  };

  const WriteHeader = () => {
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>레시피 작성</div>
        <div onClick={() => handleSubmit(formData)}>완료</div>
      </div>
    );
  };

  const [ingredientValue, setIngredientValue] = useState("");

  const handleIngredientValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientValue(e.target.value);
  };

  const PushIngredient = (newValue: string) => {
    if (newValue) {
      const updatedIngredients = [...formData.ingredients, newValue];
      setFormData({ ...formData, ingredients: updatedIngredients });
    }
    setIngredientValue("");
  };

  const DeleteIngredient = (index: number) => {
    if (index !== null) {
      const updatedIngredients = formData.ingredients;
      console.log(index);
      updatedIngredients.splice(index, 1);
      setFormData({ ...formData, ingredients: updatedIngredients });
    }
  };
  console.log(formData.ingredients);

  return (
    <div className={`${styles[`container`]}`}>
      <WriteHeader></WriteHeader>
      <form className={`${styles[`container`]}`}>
        <div className={`${styles[`row-container`]}`}>
          <div style={{ width: "inherit" }}>
            <div className={`${styles[`subtitle-row`]}`}>
              사진
              {/* <div style={{ fontSize: "0.8rem", color: "rgb(149, 149, 149)" }}> (선택)</div> */}
            </div>
            {/* 이미지 선택, 미리보기, 업로드 로직 컴포넌트 */}
            <ImageUpload></ImageUpload>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>이름</div>
          <input
            className={`${styles[`input-basic`]}`}
            placeholder="입력"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>재료</div>
          <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className={`${styles[`input-ingredient-div`]}`}
                style={{
                  minWidth: "5ch",
                  width: ingredientValue ? `${ingredientValue.length * 2}ch` : "5ch",
                }}
              >
                <input
                  className={`${styles[`input-ingredient`]}`}
                  value={ingredientValue}
                  placeholder="입력"
                  type="text"
                  onChange={handleIngredientValue}
                />
              </div>
              <AddCircleOutlineIcon
                fontSize="large"
                onClick={() => {
                  PushIngredient(ingredientValue);
                }}
              />
            </div>
            <Ingredients ingredients={formData.ingredients} delete={DeleteIngredient}></Ingredients>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>특징</div>
          <input
            className={`${styles[`input-basic`]}`}
            placeholder="취향받는 컴포쓰기...."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            style={{}}
            placeholder="레시피 설명"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>
      </form>

      <div>
        데이터 확인 :{formData.name}
        {formData.content}
        {formData.ingredients}
        {/* {formData.isPrivate} */}
      </div>
    </div>
  );
};

export default WriteRecipe;
