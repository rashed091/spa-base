import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./home";
// import Frame from "../components/Frame";
import Login from "./login";
import LandingPage from "./landingPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />;
      <Route path="/login" component={Login} />;
    </Switch>
  );
}
