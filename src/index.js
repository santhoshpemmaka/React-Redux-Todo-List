import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import MainReducer from "./store/todoListstore";
import App from "./App";

const rootElement = document.getElementById("root");
const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(MainReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
