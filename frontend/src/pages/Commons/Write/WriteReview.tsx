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
import SearchPage from "@/pages/Commons/SearchPage/SearchPage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import { alcoholTypeStyle } from "@/pages/MyPage/BookmarkList";
import { useDispatch } from "react-redux";
import { selectDrinkActions } from "@/slices/selectedDrinkSlice";

export interface ReviewFormData {
  [key: string]: any; // formdata로 바꾸려면 필요.
  type: string;
  img: File | null | undefined;
  liquorId: number | undefined;
  liquorType: string | undefined;
  liquorName: string | undefined;
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

export interface SelectedLiquor {
  id: number;
  name: string;
  type: string;
}

const WriteReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // 술상세페이지(type, name, id)나 마이페이지(date) 에서 넘어오는 경우에는
  // state와 함께 넘어와서 폼에 미리 작성되어 있는다.
  console.log(location?.state)
  const state = location.state ? (location.state as StateType) : null;

  const [data, setData] = useState<ReviewFormData>({
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

  console.log(data.img);

  const handleImg = (img: File | null | undefined) => {
    // setData({ ...data, img: img });
  };

  // 모달 오픈 변수
  const [open, setOpen] = useState(false);
  const handleOpen = (props: boolean) => {
    setOpen(props);
    dispatch(selectDrinkActions.resetDrink({}));
  };

  const selectedDrink = useSelector((state: RootState) => state.selectedDrink);

  useEffect(() => {
    if (selectedDrink.id) {
      setData({
        ...data,
        liquorName: selectedDrink?.name,
        liquorId: selectedDrink?.id,
        liquorType: selectedDrink?.liquorType,
      });
      handleOpen(false)
    }
  }, [selectedDrink]);

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setData({ ...data, ratingScore: newValue });
    }
  };

  const handleSubmit = (data: ReviewFormData) => {
    // formData 생성
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    // 제출 api호출
    // apiCreateFeed(formData)
    apiCreateFeed(data)
      .then((res: any) => {
        console.log(res);
        const newFeed = res.data.body;
        navigate(`/details/feed/${newFeed.id}`);
        // 리뷰상세페이지로 이동
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
          {data.liquorType ? (
            <>
              {/* 술상세페이지에서 리뷰작성으로 넘어오면 */}
              {/* navigate state로 주종/술이름/id 같이 넘겨줘서 미리 담아놈  */}

              <div className={`${styles[`end-container`]}`}>
                <div className={styles["alcohol-type"]} style={{ backgroundColor: alcoholTypeStyle[EnglishToCode[data.liquorType]] }}>
                  {EnglishToKorean[data.liquorType]}
                </div>
                <input className={`${styles[`input-basic`]}`} type="text" value={data.liquorName} readOnly />
                <Search onClick={() => setOpen(true)} />
              </div>
            </>
          ) : (
            <>
              <div className={`${styles[`subtitle-container`]}`}>술 이름</div>
              <div className={`${styles[`end-container`]}`}>
                <Search onClick={() => setOpen(true)} />
              </div>
            </>
          )}
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            placeholder="내용 입력..."
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />
        </div>

        {/* 달력에서 리뷰작성으로 넘어오면 */}
        {/* navigate state로 선택된 날짜 같이 넘겨줘서 미리 담아놈  */}
        <div className={`${styles[`row-container`]}`}>
          <DatePicker
            selected={data.dateCreated}
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            className={`${styles[`input-basic`]}`}
            onChange={(d) => setData({ ...data, dateCreated: d })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>별점</div>
          <Rating
            value={data.ratingScore}
            onChange={handleRatingChange}
            emptyIcon={<StarIcon style={{ color: "#6c6c6c" }} fontSize="inherit" />}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>
            {data.isPublic ? <LockOpenIcon sx={{ fontSize: 35 }} /> : <LockIcon sx={{ fontSize: 35 }} />}
          </div>
          <StyleSwitch onClick={() => setData({ ...data, isPublic: !data.isPublic })} />
          {/* <button onClick={() => setPrivate(false)}>공개</button>
          <button onClick={() => setPrivate(true)}>비공개</button> */}
        </div>
      </form>

      <Modal open={open} onClose={() => setOpen(false)}>
        {/* <ModalDialog color="neutral" variant="plain"> */}
        <SearchPage handleOpen={handleOpen}></SearchPage>
        {/* </ModalDialog> */}
      </Modal>

      <div>
        데이터 확인 :{data.liquorType}
        {data.liquorName}
        {data.content}
        {data.ratingScore}
        {/* {moment(formData.date)} */}
        {data.isPublic}
      </div>
    </div>
  );
};

export default WriteReview;
