import styles from "./Write.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Rating, Select } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

interface FormData {
  img: string;
  type: string;
  name: string;
  content: string;
  ratings: number;
  isPrivate: boolean;
}

// 임의리스트
const DrinkTypeList = {
  와인: "l1",
  전통주: "l2",
  맥주: "l3",
  위스키: "l4",
  칵테일: "l5",
  홈테일: "l6",
};

const WriteQuestion = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [ratings, setRatings] = useState(0);
  const [isPrivate, setPrivate] = useState(false);

  const [formData, setFormData] = useState({
    img: "",
    type: type,
    name: name,
    content: content,
    ratings: ratings,
    isPrivate: isPrivate,
  });

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const WriteHeader = () => {
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>게시글 작성</div>
        <div>완료</div>
      </div>
    );
  };

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setRatings(newValue);
    }
  };

  const handleSubmit = (formData: FormData) => {};

  return (
    <div className={`${styles[`container`]}`}>
      <WriteHeader></WriteHeader>
      <form
        className={`${styles[`container`]}`}
        onSubmit={() => {
          handleSubmit(formData);
        }}
      >
        <div className={`${styles[`row-container`]}`}>
          <div>
            <div className={`${styles[`subtitle-row`]}`}>
              사진
              <div style={{ fontSize: "0.8rem", color: "rgb(149, 149, 149)" }}> (선택)</div>
            </div>
            <div className={`${styles[`camera-box`]}`}>
              <PhotoCameraIcon sx={{ fontSize: { xs: 25, sm: 35, md: 40, lg: 50 } }} />
            </div>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          {/* 술상세페이지에서 리뷰작성으로 넘어오면 */}
          {/* navigate state로 주종 같이 넘겨줘서 select value에 담아놓기  */}
          <div className={`${styles[`subtitle-container`]}`}>주종</div>
          <Select
            style={{ color: "red" }}
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {Object.keys(DrinkTypeList).map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>술이름</div>
          <div className={`${styles[`end-container`]}`}>
            <Search onClick={() => setOpen(true)} />
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            style={{
              backgroundColor: "rgba(149, 149, 149, 0)",
              width: "100%",
              height: "20vh",
              border: "solid rgba(149, 149, 149, 0)",
            }}
            placeholder="내용 입력..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>별점</div>
          <Rating value={ratings} onChange={handleRatingChange} />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>공개여부</div>
          <button onClick={() => setPrivate(false)}>공개</button>
          <button onClick={() => setPrivate(true)}>비공개</button>
        </div>
      </form>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog color="neutral" variant="plain">
          {/* <ModalClose /> */}술 이름 검색
        </ModalDialog>
      </Modal>

      <div>
        {type}
        {name}
        {content}
        {ratings}
        {isPrivate}
      </div>
    </div>
  );
};

export default WriteQuestion;
