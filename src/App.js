import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

import Deals from "./components/deals";
import Test from "./components/pages/test";

import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Switch>
          <Route path="/deals" component={Deals} />
          <Route path="/asset/:serialNumber" component={Test} />
          <Redirect from="/" exact to="/deals" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
