import React, { useState } from "react";
import NavbarT from "./navbartechnician";
import { FaRegUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import {  useSelector,useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { tokeniduser} from '../redux/action';

const Profile = () => {
  const [setNIM, setsetNIM] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNoHp] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(data => data.user.token);
  const id = useSelector(data => data.user.id);
  const logoutpost =() => {
    console.log(token);
    fetch('https://web-lelang.herokuapp.com/api/logout', {
        method: 'POST',
        headers: {
                  Accept: 'application/json',
                  'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
            token: token
          })
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            dispatch(tokeniduser("",""))
            history.push("/");
            return response.json()
          } else {
            throw new Error('Something went wrong on api server!');
          }
        })   
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
          <a href="#" onClick={logoutpost} className="logout-btn">
            <button type="button"  className="btn btn-primary">
              Logout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
