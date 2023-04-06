import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Modal from "@mui/joy/Modal";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import StarIcon from "@mui/icons-material/Star";
import Calendar from "react-calendar";
import styles from "./Write.module.css";
import ImageUpload from "@/components/Commons/ImageUpload/ImageUpload";
import { apiCreateFeed } from "@/api/feed";
import SearchPage from "@/pages/Commons/SearchPage/SearchPage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import { alcoholTypeStyle } from "@/pages/MyPage/BookmarkList";
import { useDispatch } from "react-redux";
import { selectDrinkActions } from "@/slices/selectedDrinkSlice";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import moment from "moment";

export interface ReviewFormData {
  [key: string]: any; // formdata로 바꾸려면 필요.
  type: string;
  // img: File | null | undefined;
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

export const EnglishToKorean: { [key: string]: string } = {
  WINE: "와인",
  WHISKY: "위스키",
  BEER: "맥주",
  TRADITION: "전통주",
  COCKTAIL: "칵테일",
  HOMETENDER: "홈테일",
};

export const EnglishToCode: { [key: string]: string } = {
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
  const dispatch = useDispatch();

  // 술상세페이지(type, name, id)나 마이페이지(date) 에서 넘어오는 경우에는
  // state와 함께 넘어와서 폼에 미리 작성되어 있는다.
  console.log(location?.state);
  const state = location.state ? (location.state as StateType) : null;
  console.log(state);

  const [data, setData] = useState<ReviewFormData>({
    type: "리뷰글",
    // img: null,
    liquorId: state && state.liquorId ? state.liquorId : undefined,
    liquorType: state && state.liquorType ? state.liquorType : "",
    liquorName: state && state.liquorName ? state.liquorName : "",
    content: "",
    ratingScore: 0,
    isPublic: true,
    dateCreated: state && state.dateCreated ? state.dateCreated : new Date(),
  });
  console.log(data);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const handleImg = (img: File | null | undefined) => {
    setImgFile(img || null);
  };

  // 모달 오픈 변수
  const [open, setOpen] = useState(false);
  const handleOpen = (props: boolean) => {
    setOpen(props);
    dispatch(selectDrinkActions.resetDrink({}));
  };

  const selectedDrink = useSelector((state: RootState) => state.selectedDrink);
  console.log(selectedDrink)
  useEffect(() => {
    if (selectedDrink.id) {
      setData({
        ...data,
        liquorName: selectedDrink?.name,
        liquorId: selectedDrink?.id,
        liquorType: selectedDrink?.liquorType,
      });
      handleOpen(false);
    }
  }, [selectedDrink]);

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setData({ ...data, ratingScore: newValue });
    }
  };

  // 날짜 바꾸는 달력
  const [openCalendar, setOpenCalendar] = useState(false);
  const handleDate = (date: Date) => {
    setData({ ...data, dateCreated: date });
    setOpenCalendar(false)
  };

  const handleSubmit = (data: ReviewFormData) => {
    if (data.liquorId != undefined && data.ratingScore != 0 && data.content != "") {
      // formData 생성
      console.log(data)
      console.log(imgFile)
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
      apiCreateFeed(formData)
        .then((res: any) => {
          console.log(res);
          const newFeed = res.data.body;
          // 상세페이지로 이동할 때 작성후 넘어간 건지 확인을 위해 state 같이 넘겨줌.
          navigate(`/details/feed/${newFeed.id}`, {state:{writeSuccess : true}});
        })
        .catch((error) => {
          console.error(error);
          navigate("/");
        });
    } else {
      alert("💡리뷰 양식을 모두 채워주세요💡");
    }
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
              <div style={{ fontSize: "0.8rem", color: "rgb(149, 149, 149)", marginLeft:"5px"}}>(선택)</div>
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

              <div className={`${styles[`search-container`]}`}>
                <div
                  className={styles["alcohol-type"]}
                  style={{ backgroundColor: alcoholTypeStyle[EnglishToCode[data.liquorType]] }}
                >
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
          <div style={{marginLeft:"3px"}} className={`${styles[`subtitle-row`]}`}>
            <CalendarTodayIcon onClick={() => setOpenCalendar(!openCalendar)}/>
          </div>
          <div style={{marginLeft:"30px"}} className={`${styles[`input-basic`]}`} onClick={() => setOpenCalendar(!openCalendar)}>
            {data.dateCreated ? String(data.dateCreated).slice(0,10) : "N/A"}
          </div>
          {openCalendar ? (
            <div
              style={{ 
                scale: "0.6",
                zIndex: 10,
                position: "absolute",
                width: "400px",
                bottom: "-10px",
                left: "9px"
              }}
            >
              <Calendar
                className="react-calendar"
                onChange={handleDate}
                // 일요일 먼저
                calendarType="Hebrew"
                // 연도 못보게
                minDetail="month"
                // 이전, 다음달 못보게
                maxDetail="month"
                showNeighboringMonth={false}
                locale="ko-KO"
                // 달력에 '일' 빼는 코드
                formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
              />
            </div>
          ) : (
            <></>
          )}
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

        </div>
      </form>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ paddingTop: "56px" }}>
          <SearchPage handleOpen={handleOpen}></SearchPage>
        </div>
      </Modal>
    </div>
  );
};
export default WriteReview;
