import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const EditProject = (props) => {
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const idKey = props.match.params.idpj;

  if (!token) {
    history.push("/login");
  }
  if (role != "admin") {
    history.push("/active");
  }
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [initprice, setInitPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [hardware, setHardware] = useState("");
  const [lastday, setLastDay] = useState("");
  const [errormessage, setErrorMessage] = useState(false);

  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/getProject", {
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
        setTitle(responseJson.judul);
        setInitPrice(responseJson.harga_awal);
        setDesc(responseJson.deskripsi);
        setLocation(responseJson.lokasi);
        setHardware(responseJson.jenis);
        setLastDay(responseJson.tanggal_akhir_bid);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateProject = () => {
    if (status == "" || title == "" || initprice == "" || desc == "" || location == "" || hardware == "" || lastday == "") {
      setErrorMessage(true);
    } else {
      fetch("https://web-lelang.herokuapp.com/api/updateProject", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idKey,
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
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Something went wrong on api server!");
          }
        })
        .then((responseJson) => {
          setErrorMessage(false);
          history.push("/active");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="wrap">
      <div className="content-edit-project-page">
        <div className="cancel-side col-4">
          <a href="#" onClick={history.goBack}>
            <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
          </a>
        </div>
        <div className="putih col-8">
          <div className="header">
            <h1>EDIT PROJECT</h1>
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
                <input type="date" className="form-control" id="lastday" placeholder="Last Bidding Date" required value={lastday} onChange={(e) => setLastDay(e.target.value)} />
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
                  const confirmBox = window.confirm("Are you sure you want to update this project?");
                  if (confirmBox == true) {
                    updateProject();
                  }
                }}
                className="edit-project-btn"
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

export default EditProject;
