import styles from "@/components/Commons/TasteForm/TasteForm.module.css";
import React, { useEffect, useState } from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RadioGroup, FormControlLabel, Radio, Typography } from "@material-ui/core";
import ConfettiButton from "../ConfettiButton/ConfettiButton";
import { apiGetUserInfo, apiSubmitSurvey } from "@/api/users";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userInfoActions } from "@/slices/userInfoSlice";

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
    // border: "solid ",
    marginBottom: "20px",
  },
  formControlLabel: {
    // margin: theme.spacing(1),
    color: "white",
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "white",
    },
  },
  formControl: {
    width: "90vw",
  },
  radio: {
    "&:not(:checked)": {
      color: theme.palette.common.white,
    },
  },
  label: {
    fontSize: "1rem", // 폰트 크기를 변경합니다.
  },
}));

const TasteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState({
    sweetness: null,
    bitter: null,
    body: null,
    aroma: null,
    sour: null,
  });
  // useEffect(() => {
  //   if (self.name != 'reload') {
  //     self.name = 'reload';
  //     self.location.reload();
  // }
  // else self.name = ''; 
  // }, [])
  


  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue({
      ...selectedValue,
      [event.target.name]: event.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(selectedValue);
  // }, [selectedValue]);

  const handleSubmitSurvey = () => {
    
    // e.preventDefault();
    if (Object.values(selectedValue).includes(null)) {
      alert("✨취향을 모두 입력해주세요✨");
    } else {
      apiSubmitSurvey(selectedValue)
      .then((response) => {
        // console.log(response)
        if (response?.data.success) {
          apiGetUserInfo()
          .then((response)=> {
            // console.log(response)
            // 응답이 성공적으로 왔는지 확인하고 유저정보에 isLogin 추가해서 dispatch 요청
            if (response?.data.body) {
              // console.log(`로그인유저정보 :${response}`);
              const userInfo = { ...response.data.body, isLogin: true };
              dispatch(userInfoActions.saveUserInfo(userInfo));
            } else {
              // console.log("유저정보없음");
            }
            navigate("/");
          })
        }
      })
          .catch((e)=> {
            // console.log(e)
          })
    }
  };

  return (
    <div className={`${styles[`container`]}`}>
      <h3 className={`${styles[`head-text`]}`}>🍸선호하는 맛의 취향을 선택해보세요🍹</h3>
      <div className={`${styles[`info-text`]}`}>선택한 맛울 기반으로 주종별 추천을 해드립니다.</div>

      <div className={`${styles[`taste-wrap`]}`}>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>단맛</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="sweetness"
              // defaultValue="3"
              value={selectedValue.sweetness}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="3"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="2"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="1"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>쓴맛</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="bitter"
              // defaultValue="3"
              value={selectedValue.bitter}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="3"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="2"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="1"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>바디감</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="body"
              // defaultValue="3"
              value={selectedValue.body}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="3"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="2"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="1"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>풍부한 향</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="aroma"
              // defaultValue="3"
              value={selectedValue.aroma}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="3"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="2"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="1"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>신맛</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="sour"
              // defaultValue="3"
              value={selectedValue.sour}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="3"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="2"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="1"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div onClick={handleSubmitSurvey} style={{marginTop:"5%"}}>
          <ConfettiButton filledForm={!Object.values(selectedValue).includes(null)}></ConfettiButton>
        </div>
      </div>
    </div>
  );
};

export default TasteForm;
