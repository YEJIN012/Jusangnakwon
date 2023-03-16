import { Provider } from "react-redux";
import store from "./store";
import TestPage from "@/pages/TestPage";
import BottomBar from "@/pages/Common/BottomBar/BottomBar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hi</h1>
        <TestPage />
      </div>
      <BottomBar/>
    </Provider>
  );
}

export default App;
