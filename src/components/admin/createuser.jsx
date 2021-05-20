import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateUser = () => {
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);

  if (!token) {
    history.push("/");
  }
  if (role != "admin") {
    history.push("/active");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [nim, setNIM] = useState("");
  const [nohp, setNoHp] = useState("");
  const [username, setUsername] = useState("");
  const [roleUser, setRoleUser] = useState("");

  const createUserPost = () => {
    if (email == "" || password == "" || nama == "" || nim == "" || nohp == "" || username == "" || roleUser == "") {
      console.log("Ada field kosong");
    } else {
      fetch("https://web-lelang.herokuapp.com/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: roleUser,
          name: nama,
          username: username,
          nohp: nohp,
          email: email,
          nim: nim,
          password: password,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
            return response.json();
          } else {
            console.log(response.status);
            throw new Error("Something went wrong on api server!");
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
          history.push("/user");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

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
                <select className="form-select" id="role-dropdown" required onChange={(e) => setRoleUser(e.target.value)}>
                  <option selected>Choose...</option>
                  <option value="technician">Technician</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
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
                <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="btn-wrap">
              <a href="#" className="create-user-btn" onClick={createUserPost}>
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
