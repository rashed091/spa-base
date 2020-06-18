import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./login";

export default function Routes() {
  return <Route exact path="/" component={LoginPage} />;
}
