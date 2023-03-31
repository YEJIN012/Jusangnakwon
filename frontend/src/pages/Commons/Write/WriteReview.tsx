import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styles from "./Write.module.css";
import ImageUpload from "@/components/Commons/ImageUpload/ImageUpload";
import moment from "moment";
import { apiCreateFeed } from "@/api/feed";

interface FormData {
  type: string;
  img: string | null;
  liquorId: number;
  liquorType: string;
  liquorName: string;
  content: string | number | readonly string[] | undefined;
  ratingScore: number;
  isPublic: boolean;
  dateCreated: Date | null;
}

// const StyleModal = styled(ModalDialog)(({theme}) => ({
//     "& .JoyModal-backdrop": {
//       backgroundColor:" #000000"
//     },
// }));

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

const codeToKorean: { [key: string]: string } = {
  l1: "와인",
  l2: "위스키",
  l3: "맥주",
  l4: "전통주",
  l5: "칵테일",
  l6: "홈테일",
};

const EnglishToKorean: { [key: string]: string } = {
  WINE: "와인",
  WHISKY: "위스키",
  BEER: "맥주",
  TRADITION: "전통주",
  COCKTAIL: "칵테일",
  HOMETENDER: "홈테일",
};

const EnglishToCode: { [key: string]: string } = {
  WINE: "l1",
  WHISKY: "l2",
  BEER: "l3",
  TRADITION: "l4",
  COCKTAIL: "l5",
  HOMETENDER: "l6",
};

interface StateType {
  liquorId: number | null;
  liquorType: string | null;
  liquorName: string | null;
  dateCreated: Date | null;
}

const WriteReview = () => {
  const location = useLocation();

  // 술상세페이지(type, name, id)나 마이페이지(date) 에서 넘어오는 경우에는
  // state와 함께 넘어와서 폼에 미리 작성되어 있는다.
  const state = location.state ? (location.state as StateType) : null;

  const [formData, setFormData] = useState<FormData>({
    type: "리뷰글",
    img: null,
    liquorId: state && state.liquorId ? state.liquorId : 0,
    liquorType: state && state.liquorType ? state.liquorType : "",
    liquorName: state && state.liquorName ? state.liquorName : "",
    dateCreated: state && state.dateCreated ? state.dateCreated : new Date(),
    content: "",
    ratingScore: 0,
    isPublic: true,
  });

  // 모달 오픈 변수
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setFormData({ ...formData, ratingScore: newValue });
    }
  };

  const handleSubmit = (formData: FormData) => {
    // 제출 api호출
    apiCreateFeed(formData)
      .then((res: any) => {
        console.log(res);
        const newFeed = res.data.body;
        navigate(`/feed/${newFeed.id}`); // 리뷰상세페이지로 이동
      })
      .catch((error) => {
        console.error(error);
        navigate("/");
      });
  };

  const WriteHeader = () => {
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>리뷰 작성</div>
        <div onClick={() => handleSubmit(formData)}>완료</div>
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
            <ImageUpload></ImageUpload>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          {/* 술상세페이지에서 리뷰작성으로 넘어오면 */}
          {/* navigate state로 주종/술이름/id 같이 넘겨줘서 미리 담아놈  */}
          <div className={`${styles[`subtitle-container`]}`}>주종</div>
          <input
            className={`${styles[`input-basic`]}`}
            type="text"
            value={EnglishToKorean[formData.liquorType]}
            readOnly
            // onChange={(e) => {
            //   setFormData({ ...formData, liquorType: KoreanToEnglish[e.target.value] });
            // }}
          >
            {/* <option value="" disabled>
              선택
            </option>
            {Object.keys(KoreanToEnglish).map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))} */}
          </input>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>술 이름</div>
          <div className={`${styles[`end-container`]}`}>
            <input className={`${styles[`input-basic`]}`} type="text" value={formData.liquorName} readOnly />
            <Search onClick={() => setOpen(true)} />
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            placeholder="내용 입력..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>

        {/* 달력에서 리뷰작성으로 넘어오면 */}
        {/* navigate state로 선택된 날짜 같이 넘겨줘서 미리 담아놈  */}
        <div className={`${styles[`row-container`]}`}>
          <DatePicker
            selected={formData.dateCreated}
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            className={`${styles[`input-basic`]}`}
            onChange={(d) => setFormData({ ...formData, dateCreated: d })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>별점</div>
          <Rating
            value={formData.ratingScore}
            onChange={handleRatingChange}
            emptyIcon={<StarIcon style={{ color: "#6c6c6c" }} fontSize="inherit" />}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>
            {formData.isPublic ? <LockOpenIcon sx={{ fontSize: 35 }} /> : <LockIcon sx={{ fontSize: 35 }} />}
          </div>
          <StyleSwitch onClick={() => setFormData({ ...formData, isPublic: !formData.isPublic })} />
          {/* <button onClick={() => setPrivate(false)}>공개</button>
          <button onClick={() => setPrivate(true)}>비공개</button> */}
        </div>
      </form>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog color="neutral" variant="plain">
          술 이름 검색
        </ModalDialog>
      </Modal>

      <div>
        데이터 확인 :{formData.liquorType}
        {formData.liquorName}
        {formData.content}
        {formData.ratingScore}
        {/* {moment(formData.date)} */}
        {formData.isPublic}
      </div>
    </div>
  );
};

export default WriteReview;
