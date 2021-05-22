import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const EditUser = (props) => {
  let history = useHistory();
  const token = useSelector((data) => data.user.token);
  const role = useSelector((data) => data.user.role);
  const idKey = props.match.params.id;
  if (!token) {
    history.push("/login");
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
  const [emailKey, setEmailKey] = useState("");
  const [errormessage, setErrorMessage] = useState(false);

  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/getusername", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idKey,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        setEmail(responseJson.email);
        setEmailKey(responseJson.email);
        setNama(responseJson.name);
        setNoHp(responseJson.nohp);
        setNIM(responseJson.nim);
        setUsername(responseJson.username);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateUser = () => {
    if (email == "" || password == "" || nama == "" || nim == "" || nohp == "" || username == "") {
      setErrorMessage(true);
    } else {
      fetch("https://web-lelang.herokuapp.com/api/edituser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idKey,
          name: nama,
          username: username,
          nohp: nohp,
          email: email,
          nim: nim,
          password: password,
        }),
      })
        .then(function (response) {
          if (response.status === 201) {
            return "Berhasil diupdate";
          } else {
            return "Gagal diupdate";
          }
        })
        .then(() => {
          setErrorMessage(false);
          history.push("/user");
        })
        .catch((error) => {
          console.error("err", error);
        });
    }
  };

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
          <div className="input-wrap">
            <div className="mb-3">
              <input type="text" className="form-control" id="nama" placeholder="Nama" required value={nama} onChange={(e) => setNama(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="nim" placeholder="NIM" required value={nim} onChange={(e) => setNIM(e.target.value)} />
            </div>
            {emailKey == "admin@admin.com" ? null : (
              <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            )}

            <div className="mb-3">
              <input type="text" className="form-control" id="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="phone" placeholder="Phone Number" required value={nohp} onChange={(e) => setNoHp(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          {errormessage ? (
            <p className="text-center" style={{ color: "red" }}>
              All fields must be filled
            </p>
          ) : null}

          <div className="btn-wrap">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const confirmBox = window.confirm("Are you sure you want to update this user?");
                if (confirmBox == true) {
                  updateUser();
                }
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
