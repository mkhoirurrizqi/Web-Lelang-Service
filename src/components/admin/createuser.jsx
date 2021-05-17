import React from "react";

const CreateUser = () => {
  return (
    <div className="wrap">
      <div className="content-create-user-page">
        <div className="cancel-side col-4">
          <a href="/user">
            <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
          </a>
        </div>
        <div className="putih col-8">
          <div className="header">
            <h1>CREATE USER</h1>
          </div>
          <form action="">
            <div className="input-wrap">
              <div className="input-group mb-3">
                <label className="input-group-text">Role</label>
                <select className="form-select" id="role-dropdown">
                  <option selected>Choose...</option>
                  <option value="technisian">Technisian</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="nama" placeholder="Nama" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="nim" placeholder="NIM" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="username" placeholder="Username" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div className="btn-wrap">
              <a href="/user" className="create-user-btn">
                <button type="button" className="btn btn-primary">
                  Create
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
