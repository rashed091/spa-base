import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Frame from "../components/Frame";
import Login from "./login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Frame} />;
      <Route path="/login" component={Login} />;
    </Switch>
  );
}
