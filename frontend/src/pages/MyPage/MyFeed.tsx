import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import MyFeedList from "@/components/MyPage/MyFeedList";

const myFeedListProps = [
  {
    id: 1,
    ratings: 5,
    date: "2023.03.22",
    classification: "게시글",
    alcoholType: "whisky",
    img: "https://picsum.photos/300/300/?random",
    content: "이야호",
  },
  {
    id: 2,
    ratings: null,
    date: "2023.03.07",
    classification: "질문글",
    alcoholType: null,
    img: "https://picsum.photos/300/300/?random",
    content: "와인 추천해주세요!!!",
  },
  {
    id: 3,
    ratings: 4,
    date: "2023.03.21",
    classification: "게시글",
    alcoholType: "wine",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호",
  },
  {
    id: 4,
    ratings: 4,
    date: "2023.03.08",
    classification: "게시글",
    alcoholType: "cocktail",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호오오오",
  },
  {
    id: 5,
    ratings: 4,
    date: "2023.03.24",
    classification: "게시글",
    alcoholType: "beer",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 맥주 냠냠",
  },
  {
    id: 6,
    ratings: 5,
    date: "2023.03.05",
    classification: "게시글",
    alcoholType: "traditional",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 와인 냠냠",
  },
  {
    id: 7,
    ratings: 4,
    date: "2023.03.15",
    classification: "레시피",
    alcoholType: null,
    img: "https://picsum.photos/300/300/?random",
    content: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  {
    id: 8,
    ratings: 1,
    date: "2023.03.05",
    classification: "레시피",
    alcoholType: null,
    img: "https://picsum.photos/300/300/?random",
    content: "윽 별로",
  },
];

const MyFeed = () => {
  return (
    <div>
      <FloatingButton></FloatingButton>
      <MyFeedList myFeedListProps={myFeedListProps} selectedDate={new Date()}></MyFeedList>
    </div>
  );
};

export default MyFeed;
