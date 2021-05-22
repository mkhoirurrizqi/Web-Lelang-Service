import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateUser = (props) => {
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);

  if (!token) {
    history.push("/login");
  }
  if (role === "admin") {
    history.push("/active");
  }

  const [hargatawar, setHargaTawar] = useState("");
  const projectKey = props.match.params.id;
  const [errormessage, setErrorMessage] = useState(false);

  const bidnow = () => {
    if (hargatawar == "") {
      setErrorMessage(true);
    } else {
      fetch("https://web-lelang.herokuapp.com/api/createBid", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: id,
          project_id: projectKey,
          harga_tawar: hargatawar,
        }),
      })
        .then(function (response) {
          if (response.status === 201) {
            return "Berhasil bid project";
          } else {
            return "Gagal bid project";
          }
        })
        .then(() => {
          setErrorMessage(false);
          history.push("/active");
        })
        .catch((error) => {
          console.error("err", error);
        });
    }
  };

  return (
    <div className="wrap">
      <div className="content-create-user-page">
        <div className="cancel-side col-4">
          <a href="/active">
            <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
          </a>
        </div>
        <div className="putih col-8">
          <div className="header">
            <h1>BID PROJECT FORM</h1>
          </div>
          <form action="">
            <div className="input-wrap">
              <div className="mb-3">
                <input type="text" className="form-control" id="nama" placeholder="Asked Price" required value={hargatawar} onChange={(e) => setHargaTawar(e.target.value)} />
              </div>
            </div>

            {errormessage ? (
              <p className="text-center" style={{ color: "red" }}>
                Asked price field must be filled
              </p>
            ) : null}

            <div className="btn-wrap">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const confirmBox = window.confirm("Are you sure you want to place a bid?");
                  if (confirmBox == true) {
                    bidnow();
                  }
                }}
              >
                BID NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
