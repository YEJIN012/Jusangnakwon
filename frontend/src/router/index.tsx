import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home/Home";
import Feed from "@/pages/Feed/Feed";
import FeedMain from "@/pages/Feed/FeedMain";
import FeedDetail from "@/pages/Feed/FeedDetail";
import Playground from "@/pages/Playground/Playground";
import PlaygroundMain from "@/pages/Playground/PlaygroundMain"
import ABTI from "@/pages/Playground/ABTI/ABTI";
import Guide from "@/pages/Playground/Guide/Guide";
import Hometender from "@/pages/Playground/Hometender/Hometender";
import MyPage from "@/pages/MyPage/MyPage";

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: "/",
    children: [
      {
        index: true,
        element: <Home></Home>,
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
            element: <ABTI></ABTI>
          },
          {
            path: "hometender",
            element: <Hometender></Hometender>
          },
          {
            path: "guide",
            element: <Guide></Guide>
          }
        ]
      },
      {
        path: "mypage",
        element: <MyPage></MyPage>,
      },
    ],
  },
]);

export default router;
