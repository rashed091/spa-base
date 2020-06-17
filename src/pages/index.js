import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './home';

export default function Routes() {
  return (
    <Route exact path="/" component={HomePage}/>
  );
}
