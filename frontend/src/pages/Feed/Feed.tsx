import { Outlet } from "react-router-dom";
import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Feed;
