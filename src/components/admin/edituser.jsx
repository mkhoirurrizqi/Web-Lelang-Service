import React from "react";

const EditUser = () => {
  return (
    <div>
      <div className="wrap">
        <div className="content-edit-user-page">
          <div className="cancel-side col-4">
            <a href="/admin/user-page">
              <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
            </a>
          </div>
          <div className="putih col-8">
            <div className="header">
              <h1>EDIT USER</h1>
            </div>
            <form action="">
              <div className="input-wrap">
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
                  <input type="text" className="form-control" id="phone" placeholder="Nomor Handphone" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="password" placeholder="Password" />
                </div>
              </div>
              <div className="btn-wrap">
                <a href="/admin/user-page" className="edit-user-btn">
                  <button type="button" className="btn btn-primary">
                    Update
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
