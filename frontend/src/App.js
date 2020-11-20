import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Find } from "./pages/Find";
import Create from "./pages/Create";
import { About } from "./pages/About";
import "antd/dist/antd.css";

export const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/find' component={Find} exact />
        <Route path='/create' component={Create} exact />
        <Route path='/about' component={About} exact />
        <Route component={Error} />
      </Switch>
    </main>
  );
};
