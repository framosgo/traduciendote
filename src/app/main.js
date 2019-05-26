import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "containers/App";

// FIXME PATH
import initialState from "../base/store";
import { configureStore } from "../base/store";

const store = configureStore(initialState);

const ReactApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

render(<ReactApp />, document.getElementById("root"));
