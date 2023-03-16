import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home/Home";
import Feed from "@/pages/Feed/Feed";
import Playground from "@/pages/Playground/Playground";
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
      },
      {
        path: "playground",
        element: <Playground></Playground>,
      },
      {
        path: "mypage",
        element: <MyPage></MyPage>,
      },
    ],
  },
]);

export default router;
