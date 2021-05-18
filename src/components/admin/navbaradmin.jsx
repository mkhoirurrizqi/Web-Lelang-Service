import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";

const NavbarA = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i>
            <GiHamburgerMenu />
          </i>
        </button>
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
            <a href="/" className="profile-icon">
              <IoLogOutOutline size="2em" />
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarA;
