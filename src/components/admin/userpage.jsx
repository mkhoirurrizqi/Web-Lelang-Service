import React, { useState } from "react";
import NavbarA from "../admin/navbaradmin";

const UserPage = () => {
  return (
    <div>
      <NavbarA />
      <div className="container">
        <div className="content-user-page">
          <a href="/user/create">
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </a>
          <table className="table table-light table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Role</th>
                <th scope="col">Name</th>
                <th scope="col">NIM</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Admin</td>
                <td>Bambang Pamungkas</td>
                <td>118140831</td>
                <td>bambang.118140831@student.itera.ac.id</td>
                <td>bepe831</td>
                <td>085260007000</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic outlined button group">
                    <a type="button" className="btn btn-primary" href="/user/edit">
                      Edit
                    </a>
                    <form action="" method="post" className="d-inline">
                      <button className="btn btn-warning">Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Technician</td>
                <td>Bruno Mars</td>
                <td>118140901</td>
                <td>bruno.118140901@student.itera.ac.id</td>
                <td>brunooo</td>
                <td>081912344321</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic outlined button group">
                    <a type="button" className="btn btn-primary" href="/user/edit">
                      Edit
                    </a>
                    <form action="" method="post" className="d-inline" onclick="return confirm('Yakin mengarsipkan data?')">
                      <button className="btn btn-warning">Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
