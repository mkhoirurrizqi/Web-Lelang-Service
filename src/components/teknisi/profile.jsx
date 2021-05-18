import React, { useState } from "react";
import NavbarT from "./navbartechnician";
import { FaRegUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  const [setNIM, setsetNIM] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNoHp] = useState("");
  return (
    <div>
      <NavbarT />
      <div className="container profile-page">
        <div className="prof-icon">
          <FaRegUserCircle size="15em" className="icon" />
        </div>
        <div className="bio">
          <div className="name">
            <h1>Bruno Mars</h1>
            <a href="/profile/edit">
              <FiEdit className="icon" />
            </a>
          </div>
          <div className="other">
            <p>118140901</p>
            <p>bruno.118140901@student.itera.ac.id</p>
            <p>085820007000</p>
          </div>
        </div>
        <div className="btn-wrap">
          <a href="/login" className="logout-btn">
            <button type="button" className="btn btn-primary">
              Logout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
