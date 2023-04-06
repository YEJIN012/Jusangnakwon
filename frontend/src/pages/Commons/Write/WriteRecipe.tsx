import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styles from "./Write.module.css";
import ImageUpload from "@/components/Commons/ImageUpload/ImageUpload";
import Ingredients from "@/components/Commons/Ingredients/Ingredients";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { RadioGroup, FormControlLabel, Radio, Typography } from "@material-ui/core";
import { apiCreateRecipe } from "@/api/hometender";

interface RecipeFormData {
  // img: string;
  name: string;
  ingredients: string[];
  taste: {
    sweet: string | null;
    bitter: string | null;
    salty: string | null;
    sour: string | null;
  };
  description: string;
  // isPrivate: boolean;
}

interface TasteType {
  [key: string]: any;
  sweet: string | null;
  bitter: string | null;
  salty: string | null;
  sour: string | null;
}

const tasteTypes = [
  { english: "sweet", korean: "단맛" },
  { english: "bitter", korean: "쓴맛" },
  { english: "salty", korean: "짠맛" },
  { english: "sour", korean: "신맛" },
];

// 임의 리스트
const DrinkTypeList = {
  와인: "l1",
  전통주: "l2",
  맥주: "l3",
  위스키: "l4",
  칵테일: "l5",
  홈테일: "l6",
};

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
  },
  formControlLabel: {
    // margin: theme.spacing(1),
    color: "white",
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "white",
    },
  },
  formControl: {
    width: "70vw",
    marginLeft: "5vw"
  },
  radio: {
    "&:not(:checked)": {
      color: theme.palette.common.white,
    },
  },
  label: {
    fontSize: "0.8rem", // 폰트 크기를 변경합니다.
  },
}));

const WriteRecipe = () => {
  const classes = useStyles();
  const [data, setData] = useState<RecipeFormData>({
    // img: "",
    name: "",
    ingredients: [],
    taste: {
      sweet: null,
      bitter: null,
      salty: null,
      sour: null,
    },
    description: "",
    // isPrivate: false,
  });

  const navigate = useNavigate();

  const [imgFile, setImgFile] = useState<File | null>(null);

  const handleImg = (img: File | null | undefined) => {
    setImgFile(img || null);
  };

  const [taste, setTaste] = useState<TasteType>({
    sweet: null,
    bitter: null,
    salty: null,
    sour: null,
  });
  console.log(taste)
  useEffect(()=> {
    setData({ ...data, taste: taste });
  },[taste])

  const handleSubmit = (data: RecipeFormData) => {
    console.log(!Object.values(taste).includes(null))
    if (
      !Object.values(data.taste).includes(null) &&
      data.name != "" &&
      data.ingredients.length >= 1 &&
      data.description != "" &&
      imgFile !== null
    ) {
      // taste 값 저장
      // setData({ ...data, taste: taste });
      // formData 생성
      console.log(data)
      const formData = new FormData();
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      console.log(blob)
      formData.append("request", blob);
      if (imgFile) {
        formData.append("imgFile", imgFile);
      }

      console.log(formData);

      // 제출 api호출
      apiCreateRecipe(formData)
        .then((res: any) => {
          console.log(res);
          const newFeed = res.data.body;
          navigate(`/details/l6/${newFeed.id}`);
          // 상세페이지로 이동
        })
        .catch((error) => {
          console.error(error);
          navigate("/");
        });
    } else {
      alert("레시피 양식을 모두 채워주세요");
    }
  };
  const WriteHeader = () => {
    console.log(data)
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>레시피 작성</div>
        <div onClick={() => handleSubmit(data)}>완료</div>
      </div>
    );
  };

  const [ingredientValue, setIngredientValue] = useState("");

  const handleIngredientValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientValue(e.target.value);
  };

  const PushIngredient = (newValue: string) => {
    if (newValue) {
      const updatedIngredients = [...data.ingredients, newValue];
      setData({ ...data, ingredients: updatedIngredients });
    }
    setIngredientValue("");
  };

  const DeleteIngredient = (index: number) => {
    if (index !== null) {
      const updatedIngredients = data.ingredients;
      console.log(index);
      updatedIngredients.splice(index, 1);
      setData({ ...data, ingredients: updatedIngredients });
    }
  };
  console.log(data.ingredients);

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
            <ImageUpload handleImg={handleImg}></ImageUpload>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>이름</div>
          <input
            className={`${styles[`input-basic`]}`}
            placeholder="입력"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>재료</div>
          <div style={{ display: "flex", flexDirection: "column", width: "80%", height:"50%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className={`${styles[`input-ingredient-div`]}`}
                style={{
                  minWidth: "4ch",
                  width: ingredientValue ? `${ingredientValue.length * 2}ch` : "4ch",
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
            <Ingredients ingredients={data.ingredients} delete={DeleteIngredient}></Ingredients>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`taste-wrap`]}`}>
            {tasteTypes.map((type, index) => {
              return (
                <div key={index} className={`${styles[`classes.root`]}`}>
                  <div className={`${styles[`taste-type`]}`}>
                    <div className={`${styles[`subtitle-container`]}`}>{type.korean}</div>
                    <FormControl component="fieldset" className={classes.formControl}>
                      <RadioGroup
                        className={classes.radioGroup}
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name={type.english}
                        value={taste[type.english]}
                        onChange={(e) => setTaste({ ...taste, [e.target.name]: e.target.value })}
                      >
                        <FormControlLabel
                          className={classes.formControlLabel}
                          value="2"
                          control={<Radio className={classes.radio} />}
                          label={<Typography className={classes.label}>상</Typography>}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          className={classes.formControlLabel}
                          value="1"
                          control={<Radio className={classes.radio} />}
                          label={<Typography className={classes.label}>중</Typography>}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          className={classes.formControlLabel}
                          value="0"
                          control={<Radio className={classes.radio} />}
                          label={<Typography className={classes.label}>하</Typography>}
                          labelPlacement="top"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles[`row-container`]}`}>
          <textarea
            style={{height:"12vh"}}
            placeholder="레시피 설명"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default WriteRecipe;
