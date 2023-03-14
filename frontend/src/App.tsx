import { Provider } from "react-redux";
import store from "./store";
import TestPage from "@/TestPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hi</h1>
        <TestPage />
      </div>
    </Provider>
  );
}

export default App;
