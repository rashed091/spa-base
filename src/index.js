import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { Auth0Provider } from "./auth0/auth0-context";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
