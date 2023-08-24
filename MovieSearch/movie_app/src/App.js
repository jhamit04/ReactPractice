import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import { Provider } from "react-redux";
import configureStore from "./Store/store";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

