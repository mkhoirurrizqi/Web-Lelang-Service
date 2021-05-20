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
import CreateBid from "./components/teknisi/createbid";

const Routers = () => {
  return (
    <Router>
      <Switch>
        {/* Start All */}
        <Route exact path="/" component={Login} />
        <Route exact path="/active" component={HomeActive} />
        <Route exact path="/onprogress" component={HomeProgress} />
        <Route path="/done" component={HomeDone} />
        {/* End All */}

        {/* Start Teknisi */}

        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/profile" component={Profile} />
        <Route path="/active/bidproject/:id" component={CreateBid} />
        {/* End Teknisi */}

        {/* Start Admin */}
        <Route path="/onprogress/bid" component={Bid} />
        <Route path="/active/create" component={CreateProject} />
        <Route path="/active/edit" component={EditProject} />
        <Route exact path="/user" component={UserPage} />
        <Route path="/user/create" component={CreateUser} />
        <Route path="/user/edit/:id" component={EditUser} />
        {/* End Admin */}
      </Switch>
    </Router>
  );
};

export default Routers;
