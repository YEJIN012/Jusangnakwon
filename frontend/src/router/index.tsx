import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home/Home";
import HomeMain from "@/pages/Home/HomeMain";
import AllDrink from "@/pages/Home/AllDrinkList/AllDrink";
import Feed from "@/pages/Feed/Feed";
import FeedMain from "@/pages/Feed/FeedMain";
// import FeedDetail from "@/pages/Feed/FeedDetail";
import FeedDetail from "@/pages/Commons/FeedDetail/FeedDetail";
import Playground from "@/pages/Playground/Playground";
import PlaygroundMain from "@/pages/Playground/PlaygroundMain";
import ABTI from "@/pages/Playground/ABTI/ABTI";
import Guide from "@/pages/Playground/Guide/Guide";
import Hometender from "@/pages/Playground/Hometender/Hometender";
import HometenderMain from "@/pages/Playground/Hometender/HometenderMain";
import MyPage from "@/pages/MyPage/MyPage";
import DrinkDetail from "@/pages/Commons/DrinkDetail/DrinkDetail";
import Login from "@/pages/User/Login";
import Sign from "@/pages/User/Sign";
import Write from "@/pages/Commons/Write/Write";
import WriteQuestion from "@/pages/Commons/Write/WriteQuestion";
import WriteReview from "@/pages/Commons/Write/WriteReview";
import WriteRecipe from "@/pages/Commons/Write/WriteRecipe";
import MyPageMain from "@/pages/MyPage/MyPageMain";
import TasteForm from "@/components/Commons/TasteForm/TasteForm";
import MyFeed from "@/pages/MyPage/MyFeed";
import BookmarkList from "@/pages/MyPage/BookmarkList";


const router = createBrowserRouter([
  {
    element: <App></App>,
    path: "/",
    children: [
      {
        path: "",
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: <HomeMain></HomeMain>,
          },
          {
            path: "drinklist/:drinktype",
            element: <AllDrink></AllDrink>,
          },
          // {
          //   path: "drinklist/whiskey",
          //   element: <AllWhiskey></AllWhiskey>,
          // },
          // {
          //   path: "drinklist/wine",
          //   element: <AllWine></AllWine>,
          // },
          // {
          //   path: "drinklist/korean",
          //   element: <AllKorean></AllKorean>,
          // },
          // {
          //   path: "drinklist/beer",
          //   element: <AllBeer></AllBeer>,
          // },
        ],
      },
      {
        path: "feed",
        element: <Feed></Feed>,
        children: [
          {
            index: true,
            element: <FeedMain></FeedMain>,
          },
          // {
          //   path: ":feedId",
          //   element: <FeedDetail></FeedDetail>,
          // },
        ],
      },
      {
        path: "playground",
        element: <Playground></Playground>,
        children: [
          {
            index: true,
            element: <PlaygroundMain></PlaygroundMain>,
          },
          {
            path: "abti",
            element: <ABTI></ABTI>,
          },
          {
            path: "hometender",
            element: <Hometender></Hometender>,
            children: [
              {
                index: true,
                element: <HometenderMain></HometenderMain>,
              },
            ],
          },
          {
            path: "guide",
            element: <Guide></Guide>,
          },
        ],
      },
      {
        path: "mypage",
        element: <MyPage></MyPage>,
        children: [
          {
            index: true,
            element: <MyPageMain></MyPageMain>,
          },
          {
            path: "bookmarks",
            element: <BookmarkList></BookmarkList>,
          },
          {
            path: "feed",
            element: <MyFeed></MyFeed>,
          },
        ],
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "sign",
        element: <Sign></Sign>,
      },
      {
        path: "tasteform",
        element: <TasteForm></TasteForm>,
      },
      {
        path: "details/:drinktype/:id",
        element: <DrinkDetail></DrinkDetail>,
      },
      {
        path: "details/feed/:id",
        element: <FeedDetail></FeedDetail>,
      },
      {
        path: "write",
        element: <Write></Write>,
        children: [
          {
            path: "question",
            element: <WriteQuestion></WriteQuestion>,
          },
          {
            path: "review",
            element: <WriteReview></WriteReview>,
          },
          {
            path: "recipe",
            element: <WriteRecipe></WriteRecipe>,
          },
        ],
      },
    ],
  },
]);

export default router;
