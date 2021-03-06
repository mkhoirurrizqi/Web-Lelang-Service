import React, { useState, useEffect } from "react";
import NavbarT from "./navbartechnician";
import { FaRegUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { tokenidroleuser } from "../redux/action";

const Profile = () => {
  const [NIM, setNIM] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNoHp] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);
  const role = useSelector((data) => data.user.role);

  if (!token) {
    history.push("/login");
  }
  if (role === "admin") {
    history.push("/active");
  }

  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        setNIM(responseJson.nim);
        setName(responseJson.name);
        setEmail(responseJson.email);
        setNoHp(responseJson.nohp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logoutpost = () => {
    fetch("https://web-lelang.herokuapp.com/api/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    }).then((response) => {
      if (response.status === 200) {
        dispatch(tokenidroleuser("", "", ""));
        history.push("/login");
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    });
  };
  return (
    <div>
      <NavbarT />
      <div className="container profile-page">
        <div className="prof-icon">
          <FaRegUserCircle size="15em" className="icon" />
        </div>
        <div className="bio">
          <div className="name">
            <h1>{name}</h1>
            <a href="/profile/edit">
              <FiEdit className="icon" />
            </a>
          </div>
          <div className="other">
            <p>{NIM}</p>
            <p>{email}</p>
            <p>{nohp}</p>
          </div>
        </div>
        <div className="btn-wrap">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              const confirmBox = window.confirm("Are you sure you want to logout?");
              if (confirmBox == true) {
                logoutpost();
              }
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
