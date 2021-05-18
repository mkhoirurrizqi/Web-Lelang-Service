import React, { useState } from "react";

const EditUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [nim, setNIM] = useState("");
  const [nohp, setNoHp] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="wrap">
      <div className="content-edit-user-page">
        <div className="cancel-side col-4">
          <a href="/user">
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
                <input type="text" className="form-control" id="nama" placeholder="Nama" required value={nama} onChange={(e) => setNama(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="nim" placeholder="NIM" required value={nim} onChange={(e) => setNIM(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="Phone Number" required value={nohp} onChange={(e) => setNoHp(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="btn-wrap">
              <a href="/user" className="edit-user-btn">
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

export default EditUser;
