import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";
import { CookiesProvider } from "react-cookie";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import BottomBar from "@/components/Commons/BottomBar/BottomBar";
import Header from "@/components/Commons/Header/Header";
import styles from "./App.module.css";
import ScrollToTop from "./components/Commons/ScrollToTop/ScrollToTop";
import TopButton from "./components/Commons/ScrollToTop/TopButton";
export const persistor = persistStore(store);

const App = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        <CookiesProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {/* <Header /> */}
              <div className={`${styles[`content-wrapper`]}`}>
                <Outlet></Outlet>
              </div>
              <BottomBar />
            </PersistGate>
          </Provider>
        </CookiesProvider>
      </div>
      <TopButton></TopButton>
    </>
  );
};

export default App;
