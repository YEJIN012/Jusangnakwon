import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";
// import TestPage from "@/pages/TestPage";
import BottomBar from "@/components/Commons/BottomBar/BottomBar";
import Header from "@/components/Commons/Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <div className={`${styles[`content-wrapper`]}`}>
          <Outlet></Outlet>
        </div>
        {/* <TestPage /> */}
        <BottomBar />
      </Provider>
    </div>
  );
}

export default App;
