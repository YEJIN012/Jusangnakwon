import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <h1>MyPage</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MyPage;
