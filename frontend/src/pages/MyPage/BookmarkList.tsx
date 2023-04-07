import styles from "./BookmarkList.module.css";
import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGetBookmarkList } from "@/api/mypage";
import { EnglishToCode } from "../Commons/Write/WriteReview";
import { EnglishToKorean } from "../Commons/Write/WriteReview";

const dummyBookmarkList = [
  {
    // 와인
    id: 1,
    img: "https://picsum.photos/300/300/?random",
    type: "l1",
    alcoholType: "와인",
    alcoholName: "콥케",
  },
  {
    // 칵테일
    id: 2,
    img: "https://picsum.photos/300/300/?random",
    type: "l5",
    alcoholType: "칵테일",
    alcoholName: "깔루아밀크",
  },
  {
    // 맥주
    id: 3,
    img: "https://picsum.photos/300/300/?random",
    type: "l3",
    alcoholType: "맥주",
    alcoholName: "홉하우스",
  },
  {
    // 전통주
    id: 4,
    img: "https://picsum.photos/300/300/?random",
    type: "l4",
    alcoholType: "전통주",
    alcoholName: "서울의밤",
  },
  {
    // 위스키
    id: 5,
    img: "https://picsum.photos/300/300/?random",
    type: "l2",
    alcoholType: "위스키",
    alcoholName: "잭다니엘",
  },
  {
    // 홈칵테일
    id: 6,
    img: "https://picsum.photos/300/300/?random",
    type: "l6",
    alcoholType: "홈칵테일",
    alcoholName: "메로나주",
  },
];

interface BookmarkItem {
  id: number;
  name: string;
  img: string | null;
  liquorType: string;
}

export const alcoholTypeStyle: { [key: string]: string } = {
  l1: "var(--tag-color-purple)",
  l2: "var(--tag-color-red)",
  l3: "var(--tag-color-orange)",
  l4: "var(--tag-color-hotpink)",
  l5: "var(--tag-color-green)",
  l6: "var(--tag-color-skyblue)",
};

const BookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkItem[] | []>();
  const [curPageNumber, setCurPageNumber] = useState(0);

  useEffect(() => {
    apiGetBookmarkList(0)
      .then((r) => {
        // console.log(r);
        setBookmarkList(r?.data.body.content);
      })
      .catch((e) => {
        // console.log(e);
      });
  }, []);

  return (
    <>
      <h2 style={{ marginLeft: "5%" }}>나의 스크랩북</h2>
      <div className={`${styles[`drink-list-wrap`]}`}>
        <FloatingButton></FloatingButton>
        <ul className={`${styles[`tab-drink-list`]}`}>
          {bookmarkList?.map((bookmark) => (
            <li key={bookmark.id}>
              <div className={styles["item-container"]}>
                <Link to={`/details/${EnglishToCode[bookmark.liquorType]}/${bookmark.id}`}>
                  {bookmark?.img && <img src={bookmark.img}></img>}
                </Link>
                <div className={styles["item-title"]}>
                  <div
                    className={styles["alcohol-type"]}
                    style={{ backgroundColor: alcoholTypeStyle[EnglishToCode[bookmark.liquorType]] }}
                  >
                    {EnglishToKorean[bookmark.liquorType]}
                  </div>
                  <div className={styles["like-box"]}>
                    <div className={styles["alcohol-name"]}>{`${bookmark.name.substring(0,10)} ···`}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookmarkList;
