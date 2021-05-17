import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/all/Login";
import HomeActive from "./components/all/homepageactive";
import HomeDone from "./components/all/homepagedone";
import HomeProgress from "./components/all/homepageprogress";

import Profile from "./components/teknisi/profile";
import EditProfile from "./components/teknisi/editprofile";

import Bid from "./components/admin/bidpage";
import CreateProject from "./components/admin/createproject";
import EditProject from "./components/admin/editproject";
import UserPage from "./components/admin/userpage";
import CreateUser from "./components/admin/createuser";
import EditUser from "./components/admin/edituser";

const Routers = () => {
  return (
    <Router>
      <Switch>
        {/* Start All */}
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/active">
          <HomeActive />
        </Route>
        <Route path="/onprogress">
          <HomeProgress />
        </Route>
        <Route path="/done">
          <HomeDone />
        </Route>
        {/* End All */}

        {/* Start Teknisi */}

        <Route path="/profile/edit">
          <EditProfile />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* End Teknisi */}

        {/* Start Admin */}
        <Route path="/active/bid">
          <Bid />
        </Route>
        <Route path="/active/create">
          <CreateProject />
        </Route>
        <Route path="/active/edit">
          <EditProject />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route path="/user/create">
          <CreateUser />
        </Route>
        <Route path="/user/edit">
          <EditUser />
        </Route>
        {/* End Admin */}
      </Switch>
    </Router>
  );
};

export default Routers;
