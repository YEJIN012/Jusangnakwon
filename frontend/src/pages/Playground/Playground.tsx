import { Outlet } from "react-router-dom";

const Playground = () => {
  return (
    <div>
      <h1>Playground</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Playground;
