import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";

// if (process.env.NODE_ENV !== "production") {
//   const originalConsoleError = console.error;
//   console.error = (...args) => {
//     if (!args[0].startsWith("Warning: Using UNSAFE_componentWillReceiveProps in strict mode")) {
//       originalConsoleError(...args);
//     }
//   };
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
);
