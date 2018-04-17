import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { initialize } from "./controllers";
import store from "./store";
import App from "./app";

initialize();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
