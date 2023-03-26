import styles from "./MyFeedList.module.css";
import MyFeedItem from "./MyFeedItem";

const dummyMyFeedList = [
  {
    id: 1,
    ratings: 5,
    date: "2023.03.26",
    classification: "게시글",
    img: "https://picsum.photos/300/300/?random",
    content: "이야호",
  },
  {
    id: 2,
    ratings: null,
    date: "2023.03.25",
    classification: "질문글",
    img: "https://picsum.photos/300/300/?random",
    content: "와인 추천해주세요!!!",
  },
  {
    id: 3,
    ratings: 4,
    date: "2023.03.23",
    classification: "게시글",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호",
  },
  {
    id: 4,
    ratings: 4,
    date: "2023.03.19",
    classification: "게시글",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호오오오",
  },
  {
    id: 5,
    ratings: 4,
    date: "2023.03.18",
    classification: "게시글",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 와인 냠냠",
  },
  {
    id: 6,
    ratings: 4,
    date: "2023.03.15",
    classification: "레시피",
    img: "https://picsum.photos/300/300/?random",
    content: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  {
    id: 7,
    ratings: 1,
    date: "2023.03.05",
    classification: "레시피",
    img: "https://picsum.photos/300/300/?random",
    content: "윽 별로",
  },
];

const MyFeedList = () => {
  return (
    <div className={`${styles[`myfeed-container`]}`}>
      <div className={`${styles[`myfeed-title`]}`}>
        <h2>내가 쓴 게시글</h2>
      </div>
      {dummyMyFeedList.map((myfeed) => {
        return <MyFeedItem key={myfeed.id} myfeed={myfeed}></MyFeedItem>;
      })}
    </div>
  );
};

export default MyFeedList;
