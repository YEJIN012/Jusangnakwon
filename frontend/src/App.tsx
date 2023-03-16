import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";
// import TestPage from "@/pages/TestPage";
import BottomBar from "@/components/Commons/BottomBar/BottomBar";
import Header from "@/components/Commons/Header/Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Outlet></Outlet>
        {/* <TestPage /> */}
        <BottomBar />
      </Provider>
    </div>
  );
}

export default App;
