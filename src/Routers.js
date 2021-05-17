import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/all/Login";

import HomeActive from "./components/teknisi/homepageactive";
import HomeDone from "./components/teknisi/homepagedone";
import HomeProgress from "./components/teknisi/homepageprogress";
import Profile from "./components/teknisi/profile";
import EditProfile from "./components/teknisi/editprofile";

import ProjectActive from "./components/admin/projectpageactive";
import ProjectDone from "./components/admin/projectpagedone";
import ProjectProgress from "./components/admin/projectpageprogress";
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
        {/* End All */}

        {/* Start Teknisi */}
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
        {/* End Teknisi */}

        {/* Start Admin */}
        <Route path="/admin/project-active">
          <ProjectActive />
        </Route>
        <Route path="/admin/project-done">
          <ProjectDone />
        </Route>
        <Route path="/admin/project-progress">
          <ProjectProgress />
        </Route>
        <Route path="/admin/project-active/bid">
          <Bid />
        </Route>
        <Route path="/admin/project-active/create-project">
          <CreateProject />
        </Route>
        <Route path="/admin/project-active/edit-project">
          <EditProject />
        </Route>
        <Route path="/admin/user-page">
          <UserPage />
        </Route>
        <Route path="/admin/user-page/create-user">
          <CreateUser />
        </Route>
        <Route path="/admin/user-page/edit-user">
          <EditUser />
        </Route>
        {/* End Admin */}
      </Switch>
    </Router>
  );
};

export default Routers;
