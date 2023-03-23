import styles from "./Write.module.css";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const WriteQuestion = () => {
  return (
    <div className={`${styles[`container`]}`}>
      <div className={`${styles[`row-container`]}`}>
      사진
      <div style={{fontSize:"0.8rem", color:"rgb(149, 149, 149)"}}>(선택)</div>
      </div>
      <div className={`${styles[`camera-box`]}`}>
        <PhotoCameraIcon sx={{fontSize: { xs: 25, sm: 35, md: 40, lg: 50 } }}/>
      </div>
    </div>
  );
};

export default WriteQuestion;
