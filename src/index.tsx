import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { HashRouter } from "react-router-dom";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
