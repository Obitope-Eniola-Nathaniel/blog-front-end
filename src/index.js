import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // For solid icons
// import { far } from '@fortawesome/free-regular-svg-icons'; // For regular icons
// import { fab } from '@fortawesome/free-brands-svg-icons'; // For brand icons

library.add(fas /*, far, fab */);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
