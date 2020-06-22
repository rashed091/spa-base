import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />;
    </Switch>
  );
}
