import Header from "@/components/Commons/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
