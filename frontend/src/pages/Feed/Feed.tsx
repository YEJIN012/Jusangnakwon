import { Outlet } from "react-router-dom";

const Feed = () => {
  return (
    <div>
      <h1>Feed</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Feed;
