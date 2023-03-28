import { useState, useRef } from "react";
import styles from "./ImageUpload.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const ImageUpload = () => {
  const [imgBase64, setImgBase64] = useState<string | null>(); // 미리보기 파일
  const [imgFile, setImgFile] = useState<File | null>(); // 선택한 이미지 파일

  const inputRef = useRef<HTMLInputElement>(null); // Icon onClick에 input File을 달기 위한 ref
  // console.log(inputRef);

  // 선택이미지 미리보기
  const handleChangePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    console.log(files);
    if (files) {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      // 1. 파일을 읽어 버퍼에 저장합니다.
      // 파일 상태 업데이트
      reader.onloadend = () => {
        // 2. 읽기가 완료되면 아래코드가 실행됩니다.
        const base64 = reader.result;
        if (base64) {
          var base64Sub = base64.toString();
          setImgBase64(base64Sub);
          // 파일 base64 상태 업데이트
          console.log(imgBase64);
        }
      };
      setImgFile(files[0]);
      console.log(imgFile);
    }
  };

  // save 클릭시 호출되는 form 제출함수(image 편집)
  // function handleSubmit() {
  //   console.log(imgFile);
  //   userInfo.userPwd = "";
  //   console.log(userInfo);
  //   const formData = new FormData();
  //   const blob = new Blob([JSON.stringify(userInfo)], {
  //       type: "application/json",
  //   });
  //   formData.append("image", imgFile);
  //   formData.append("userDto", blob);

  // axios
  //     .put("api/users/modify", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then(function (res) {
  //         console.log(res.data.msg);
  //         alert(t("Successfully edited profile image"));
  //         // 회원정보 수정 api 완료시, redux userInfo state 갱신.
  //         dispatch({ type: "UPDATE_USER", payload: res.data.user });
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
  // formData.append("image", imgFile);
  // formData.append("userDto", blob);

  // axios
  //     .put("/api/users/modify", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then(function (res) {
  //         alert("Successfully edited profile image");
  //         // 회원정보 수정 api 완료시, redux userInfo state 갱신.
  //         dispatch({ type: "UPDATE_USER", payload: res.data.user });
  //         setImgBase64("");
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
  // }

  return (
    <div className={`${styles[`row-container`]}`}>
      <input
        type="file"
        accept=".jpg, .png"
        style={{ display: "none" }}
        ref={inputRef} //EditIcon 에서 input에 접근 하기위해 useRef사용
        onChange={handleChangePreview}
      />


      {imgBase64 ? <img className={`${styles[`img-box`]}`} src={imgBase64}></img> : <></>}
      <div
        className={`${styles[`camera-box`]}`}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
        >
        <PhotoCameraIcon sx={{ fontSize: { xs: 25, sm: 35, md: 40, lg: 50 }}} />
      </div>
    </div>
  );
};

export default ImageUpload;
