import React from "react";
import ReactDOM from "react-dom";

import Cabecalho from "./components/Cabecalho";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
