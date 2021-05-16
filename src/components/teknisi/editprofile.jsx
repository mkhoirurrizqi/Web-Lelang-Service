import React, { useState } from "react";
// import "public/";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="wrap">
      <div className="content-update-page">
        <div className="cancel-side col-4">
          <a href="/profile">
            <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
          </a>
        </div>
        <div className="putih col-8">
          <div className="header">
            <h1>EDIT PROFILE</h1>
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
              <a href="/profile" className="update-btn">
                <button type="button" className="btn btn-primary">
                  Update
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
