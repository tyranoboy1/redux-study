import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootReducer from "./modules";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
