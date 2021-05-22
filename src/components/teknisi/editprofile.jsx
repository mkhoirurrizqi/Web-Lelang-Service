import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [nim, setNIM] = useState("");
  const [nohp, setNoHp] = useState("");
  const [username, setUsername] = useState("");
  const [errormessage, setErrorMessage] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);
  const role = useSelector((data) => data.user.role);

  if (!token) {
    history.push("/login");
  }
  if (role === "admin") {
    history.push("/active");
  }
  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        setNIM(responseJson.nim);
        setNama(responseJson.name);
        setEmail(responseJson.email);
        setUsername(responseJson.username);
        setNoHp(responseJson.nohp);
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
          id: id,
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
          history.push("/profile");
        })
        .catch((error) => {
          console.error("err", error);
        });
    }
  };
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
                <input type="text" className="form-control" id="phone" placeholder="Nomor Handphone" required value={nohp} onChange={(e) => setNoHp(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            {errormessage ? (
              <p className="text-center" style={{ color: "red" }}>
                All fields must be filled
              </p>
            ) : null}

            <div className="btn-wrap">
              <a
                onClick={() => {
                  const confirmBox = window.confirm("Are you sure you want to update your profile?");
                  if (confirmBox == true) {
                    updateUser();
                  }
                }}
                className="update-btn"
              >
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
