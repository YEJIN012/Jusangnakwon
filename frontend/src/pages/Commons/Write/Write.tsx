import { Outlet } from "react-router-dom";
import styles from "./Feed.module.css";

const Write = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Write;
