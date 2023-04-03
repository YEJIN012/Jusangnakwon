import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import MyFeedList from "@/components/MyPage/MyFeedList";
import { useEffect, useState } from "react";
import { apiGetMyFeed } from "@/api/mypage";

interface MyFeedItem {
  id: number;
  ratings: number | null;
  dateCreated: string;
  feedType: string;
  title: string | null;
  img: string | null;
  content: string;
}

interface MyFeedListProps {
  myFeedListProps: MyFeedItem[];
  // myFeedListProps: MyFeedItem[];
  selectedDate?: Date;
}
const MyFeed = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [myFeedList, setMyFeedList] = useState<MyFeedItem[] | []>([]);
  useEffect(() => {
    apiGetMyFeed(0)
      .then((r) => {
        // if (r?.data.success === true) {
        setCurrentPage(r?.data.currentPageNumber);
        setMyFeedList(r?.data.body.content);
        // }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <FloatingButton></FloatingButton>
      <MyFeedList myFeedListProps={myFeedList}></MyFeedList>
    </div>
  );
};

export default MyFeed;
