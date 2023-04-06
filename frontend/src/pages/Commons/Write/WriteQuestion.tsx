import { useState } from "react";
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
import styles from "./Write.module.css";
import ImageUpload from "@/components/Commons/ImageUpload/ImageUpload";
import { apiCreateFeed } from "@/api/feed";

export interface QuestionFormData {
  type: string;
  // img: string | null;
  title: string;
  content: string | number | readonly string[] | undefined;
  isPublic: boolean;
  dateCreated: Date | null;
}

const StyleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const WriteQuestion = () => {
  const [data, setData] = useState({
    type: "질문글",
    // img: null,
    title: "",
    content: "",
    isPublic: true,
    dateCreated: new Date(),
  });

  const navigate = useNavigate();
  console.log(data);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const handleImg = (img: File | null | undefined) => {
    setImgFile(img || null);
  };

  const handleSubmit = (data: QuestionFormData) => {
    if (data.title != undefined && data.content != "") {
      // formData 생성
      const formData = new FormData();
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      formData.append("request", blob);
      if (imgFile) {
        formData.append("imgFile", imgFile);
      }

      console.log(formData);

      // 제출 api호출
      // apiCreateFeed(formData)
      apiCreateFeed(formData)
        .then((res: any) => {
          console.log(res);
          const newFeed = res.data.body;
          navigate(`/details/feed/${newFeed.id}`);
          // 상세페이지로 이동
        })
        .catch((error) => {
          console.error(error);
          navigate("/");
        });
    } else {
      alert("💡제목과 내용은 필수입니다💡");
    }
  };

  const WriteHeader = () => {
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>질문글 작성</div>
        <div onClick={() => handleSubmit(data)}>완료</div>
      </div>
    );
  };

  return (
    <div className={`${styles[`container`]}`}>
      <WriteHeader></WriteHeader>
      <form className={`${styles[`container`]}`}>
        <div className={`${styles[`row-container`]}`}>
          <div style={{ width: "inherit" }}>
            <div className={`${styles[`subtitle-row`]}`}>
              사진
              <div style={{ fontSize: "0.8rem", color: "rgb(149, 149, 149)" }}> (선택)</div>
            </div>
            {/* 이미지 선택, 미리보기, 업로드 로직 컴포넌트 */}
            <ImageUpload handleImg={handleImg}></ImageUpload>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>글 제목</div>
          <input
            className={`${styles[`input-basic`]}`}
            type="text"
            placeholder="입력"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            placeholder="내용 입력..."
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default WriteQuestion;
