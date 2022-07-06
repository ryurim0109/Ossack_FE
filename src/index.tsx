import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./shared/App";
import { Provider } from "react-redux";

import store from "./redux/configStore";

const root = ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
