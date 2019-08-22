// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element)
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
const store = createStore(
  reducers, // todos los reducers
  {},
  applyMiddleware(reduxThunk) // estado incial
);
const container = document.getElementById("app");
// (que,donde)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
