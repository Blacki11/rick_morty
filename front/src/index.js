import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";
import { Provider } from "react-redux";
import Store from "./redux/store/Store";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
