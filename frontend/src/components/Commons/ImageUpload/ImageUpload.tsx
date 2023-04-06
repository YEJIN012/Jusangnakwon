import { useState, useRef, useEffect } from "react";
import styles from "./ImageUpload.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

interface HandleImg {
  handleImg: (img: File | null | undefined) => void;
}

const ImageUpload = (props: HandleImg) => {
  const { handleImg } = props;
  const [imgBase64, setImgBase64] = useState<string | null>(); // 미리보기 파일
  const [imgFile, setImgFile] = useState<File | null>(); // 선택한 이미지 파일

  const inputRef = useRef<HTMLInputElement>(null); // Icon onClick에 input File을 달기 위한 ref

  // 선택이미지 미리보기
  const handleChangePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
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
        }
      };
      setImgFile(files[0]);
    }
  };

  useEffect(() => {
    handleImg(imgFile);
  }, [imgFile]);

  return (
    <div className={`${styles[`row-container`]}`}>
      <input
        type="file"
        accept=".jpg, .png"
        style={{ display: "none" }}
        ref={inputRef} //EditIcon 에서 input에 접근 하기위해 useRef사용
        onChange={handleChangePreview}
      />

      {imgBase64 ? (
        <div className={`${styles[`relative`]}`}>
          <img className={`${styles[`img-box`]}`} src={imgBase64}></img>
          <CancelIcon
            fontSize="small"
            className={`${styles[`delete`]}`}
            onClick={() => {
              setImgBase64("");
              setImgFile(null);
            }}
          />
        </div>
      ) : (
        <></>
      )}
      <div
        className={`${styles[`camera-box`]}`}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <PhotoCameraIcon sx={{ fontSize: { xs: 25, sm: 35, md: 40, lg: 50 } }} />
      </div>
    </div>
  );
};

export default ImageUpload;
