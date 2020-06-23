import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { Auth0Provider } from "./auth0/auth0-hook";
import config from "./auth_config.json";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
