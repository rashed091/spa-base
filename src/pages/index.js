import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./login";
import LandingPage from "./landingPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />;
      <Route path="/login" component={Login} />;
      {/* <PrivateRoute path="/" component={LandingPage} /> */}
    </Switch>
  );
}
