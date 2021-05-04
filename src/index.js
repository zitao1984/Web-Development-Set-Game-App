import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.css";
import "./styles/CardStyles.css";
import "./styles/NavStyles.css";
import "./styles/GameStyles.css";
import "./styles/BoardStyles.css";
import store from "./redux/store";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
