import { Outlet } from "react-router-dom";
import Header from "@/components/Commons/Header/Header";

const Playground = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Playground;
