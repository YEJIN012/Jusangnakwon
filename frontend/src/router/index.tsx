import { createBrowserRouter } from "react-router-dom";

import App from "../App";

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: "/",
    children: [
      {
        index: true,
        element: <App></App>,
      },
    ],
  },
]);

export default router;
