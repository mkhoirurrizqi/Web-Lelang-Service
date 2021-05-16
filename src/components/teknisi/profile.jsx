import React from "react";
import Navbar from "./navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <p>Profile</p>
      <a href="/profile/edit">Edit Profile</a>
    </div>
  );
};

export default Profile;
