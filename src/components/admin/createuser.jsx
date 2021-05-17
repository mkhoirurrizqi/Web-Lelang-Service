import React from "react";

const CreateUser = () => {
  return (
    <div>
      <div className="wrap">
        <div className="content-create-user-page">
          <div className="cancel-side col-4">
            <a href="/admin/user-page">
              <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
            </a>
          </div>
          <div className="putih col-8">
            <div className="header">
              <h1>CREATE USER</h1>
            </div>
            <form action="">
              <div className="input-wrap">
                <div class="mb-3">
                  <input type="text" className="form-control" id="nama" placeholder="Nama" />
                </div>
                <div class="mb-3">
                  <input type="text" className="form-control" id="nim" placeholder="NIM" />
                </div>
                <div class="mb-3">
                  <input type="text" className="form-control" id="email" placeholder="Email" />
                </div>
                <div class="mb-3">
                  <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div class="mb-3">
                  <input type="text" className="form-control" id="phone" placeholder="Nomor Handphone" />
                </div>
                <div class="mb-3">
                  <input type="text" className="form-control" id="password" placeholder="Password" />
                </div>
              </div>
              <div className="btn-wrap">
                <a href="/admin/user-page" className="create-user-btn">
                  <button type="button" className="btn btn-primary">
                    Create
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

export default CreateUser;
