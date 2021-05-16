import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/all/Login";
import HomeActive from "./components/teknisi/homepageactive";
import HomeDone from "./components/teknisi/homepagedone";
import HomeProgress from "./components/teknisi/homepageprogress";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/active">
          <HomeActive />
        </Route>
        <Route path="/onprogress">
          <HomeProgress />
        </Route>
        <Route path="/done">
          <HomeDone />
        </Route>
        <Route path="/edit-profile">
          <HomeActive />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
