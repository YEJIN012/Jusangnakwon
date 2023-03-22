import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home/Home";
import HomeMain from "@/pages/Home/HomeMain";
import AllCocktail from "@/pages/Home/AllDrinkList/AllCocktail";
import AllWhiskey from "@/pages/Home/AllDrinkList/AllWhiskey";
import AllWine from "@/pages/Home/AllDrinkList/AllWine";
import AllKorean from "@/pages/Home/AllDrinkList/AllKorean";
import AllBeer from "@/pages/Home/AllDrinkList/AllBeer";
import CocktailDetail from "@/pages/Home/DrinkDetail/CocktailDetail";
import Feed from "@/pages/Feed/Feed";
import FeedMain from "@/pages/Feed/FeedMain";
import FeedDetail from "@/pages/Feed/FeedDetail";
import Playground from "@/pages/Playground/Playground";
import PlaygroundMain from "@/pages/Playground/PlaygroundMain";
import ABTI from "@/pages/Playground/ABTI/ABTI";
import Guide from "@/pages/Playground/Guide/Guide";
import Hometender from "@/pages/Playground/Hometender/Hometender";
import HometenderMain from "@/pages/Playground/Hometender/HometenderMain";
import MyPage from "@/pages/MyPage/MyPage";
import DrinkDetail from "@/pages/Commons/DrinkDetail";
import Login from "@/pages/User/Login";
import Sign from "@/pages/User/Sign";

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
            path: "drinklist/cocktail",
            element: <AllCocktail></AllCocktail>,
          },
          {
            path: "drinklist/whiskey",
            element: <AllWhiskey></AllWhiskey>,
          },
          {
            path: "drinklist/wine",
            element: <AllWine></AllWine>,
          },
          {
            path: "drinklist/korean",
            element: <AllKorean></AllKorean>,
          },
          {
            path: "drinklist/beer",
            element: <AllBeer></AllBeer>,
          },
          // {
          //   path: "recommend/:cocktailId",
          //   element: <CocktailDetail></CocktailDetail>,
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
          {
            path: ":feedId",
            element: <FeedDetail></FeedDetail>,
          },
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
        path: "details/:drinktype/:id",
        element: <DrinkDetail></DrinkDetail>,
      },
      {
        path: "details/feed/:id",
        element: <FeedDetail></FeedDetail>,
      },
    ],
  },
]);

export default router;
