import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/all/Login";
import HomeActive from "./components/teknisi/homepageactive";
import HomeDone from "./components/teknisi/homepagedone";
import HomeProgress from "./components/teknisi/homepageprogress";
import Profile from "./components/teknisi/profile";
import EditProfile from "./components/teknisi/editprofile";

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
        <Route path="/profile/edit">
          <EditProfile />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
