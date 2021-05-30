import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../layouts/Home";
import About from "../layouts/About";
import Shipping from "../layouts/Shipping";
import Nav from "../nav/Nav";

const Navigation = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shipping" component={Shipping} />
      </Switch>
    </Router>
  );
};

export default Navigation;
