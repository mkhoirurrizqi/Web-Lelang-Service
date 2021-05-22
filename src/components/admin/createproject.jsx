import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const CreateProject = () => {
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [initprice, setInitPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [hardware, setHardware] = useState("");
  const [lastday, setLastDay] = useState("");
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);
  const [errormessage, setErrorMessage] = useState(false);

  if (!token) {
    history.push("/login");
  }
  if (role != "admin") {
    history.push("/active");
  }
  const createprojectpost = () => {
    if (status == "" || title == "" || initprice == "" || desc == "" || location == "" || hardware == "" || lastday == "") {
      setErrorMessage(true);
    } else {
      fetch("https://web-lelang.herokuapp.com/api/createProject", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          judul: title,
          harga_awal: initprice,
          lokasi: location,
          deskripsi: desc,
          jenis: hardware,
          tanggal_akhir_bid: lastday,
          status: status,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
            setErrorMessage(false);
            history.push("/active");
            return response.json();
          } else {
            throw new Error("Something went wrong on api server!");
          }
        })
        .then((responseJson) => {})
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="wrap">
      <div className="content-create-project-page">
        <div className="cancel-side col-4">
          <a href="/active">
            <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
          </a>
        </div>
        <div className="putih col-8">
          <div className="header">
            <h1>CREATE PROJECT</h1>
          </div>
          <form action="">
            <div className="input-wrap">
              <div className="input-group mb-3">
                <label className="input-group-text">Status</label>
                <select className="form-select" id="role-dropdown" required onChange={(e) => setStatus(e.target.value)}>
                  <option selected>Choose...</option>
                  <option value="active">Active</option>
                  <option value="on progress">On Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="title" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="initialprice" placeholder="Initial Price" required value={initprice} onChange={(e) => setInitPrice(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="description" placeholder="Description" required value={desc} onChange={(e) => setDesc(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="location" placeholder="Location" required value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="hardware" placeholder="Hardware Type" required value={hardware} onChange={(e) => setHardware(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="date" className="form-control" id="lastday" placeholder="Last Bidding Day" required value={lastday} onChange={(e) => setLastDay(e.target.value)} />
              </div>
            </div>

            {errormessage ? (
              <p className="text-center" style={{ color: "red" }}>
                All fields must be filled
              </p>
            ) : null}

            <div className="btn-wrap">
              <a
                href="#"
                onClick={() => {
                  const confirmBox = window.confirm("Are you sure you want to create new project?");
                  if (confirmBox == true) {
                    createprojectpost();
                  }
                }}
                className="create-project-btn"
              >
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

export default CreateProject;
