import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import BottomBar from "@/components/Commons/BottomBar/BottomBar";
import Header from "@/components/Commons/Header/Header";
import styles from "./App.module.css";

const persistor = persistStore(store);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <div className={`${styles[`content-wrapper`]}`}>
            <Outlet></Outlet>
          </div>
          <BottomBar />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
