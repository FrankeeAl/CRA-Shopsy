import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import "./assets/default.css";

import App from "./App";
import * as serviceWorker from "./assets/extra/serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./redux/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log("[index.tsx] Redux Store", store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
