import React from "react";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import {  useSelector,useDispatch } from 'react-redux';
import { tokenidroleuser} from '../redux/action';


const NavbarA = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(data => data.user.token);
  const id = useSelector(data => data.user.id);
  const role = useSelector(data => data.user.role);
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
            dispatch(tokenidroleuser("","",""))
            history.push("/");
            return response.json()
          } else {
            throw new Error('Something went wrong on api server!');
          }
        })   
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i>
            <GiHamburgerMenu />
          </i>
        </button>
          <div className="logo">
            Lelang Service
            </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-tab">
            <li className="nav-item">
              <a className="nav-link" href="/active">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/onprogress">
                On Progress
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/done">
                Done
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">
                User
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <a href="#" onClick={logoutpost} className="profile-icon">
              <IoLogOutOutline size="2em" />
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarA;
