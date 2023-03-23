import styles from "./Write.module.css";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const WriteQuestion = () => {
  return (
    <div>
      사진
      <div style={{width:"5vw", height:"5vw", border: "solid 1px 0px 1px 0px white"}}>
        <PhotoCameraIcon/>
      </div>
    </div>
  );
};

export default WriteQuestion;
