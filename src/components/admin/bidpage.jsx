import React, { useState, useEffect } from "react";
import NavbarA from "../admin/navbaradmin";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BidPage = (props) => {
  const [bidder, setBidder] = useState("");
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const [storeArray, setStoreArray] = useState([]);
  const idproject = props.match.params.pjid;

  if (!token) {
    history.push("/login");
  }
  if (role != "admin") {
    history.push("/active");
  }
  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/showbidproject", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_id: idproject,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        setStoreArray([]);
        console.log(responseJson);
        responseJson.forEach((element) => {
          setStoreArray((storeArray) => [
            ...storeArray,
            {
              user_id: element.user_id,
              bidder: element.name,
              id: element.id,
              created_at: element.created_at,
              harga_tawar: element.harga_tawar,
            },
          ]);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const accbid = (idbid, harga_tawar) => {
    fetch("https://web-lelang.herokuapp.com/api/updateProjectbid", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idproject,
        user_id: idbid,
        harga_fix: harga_tawar,
      }),
    })
      .then(function (response) {
        return response;
      })
      .then((responseJson) => {
        console.log(responseJson);
        delallbid(idbid);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const delallbid = () => {
    fetch("https://web-lelang.herokuapp.com/api/delallbidproject", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_id: idproject,
      }),
    })
      .then(function (response) {
        return response;
      })
      .then((responseJson) => {
        console.log(responseJson);
        history.go(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const delbid = (idbid) => {
    console.log(idbid);
    console.log(token);
    fetch("https://web-lelang.herokuapp.com/api/delbidproject", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idbid,
      }),
    })
      .then(function (response) {
        console.log(response);
        return response;
      })
      .then((responseJson) => {
        console.log(responseJson);
        history.go(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <NavbarA />
      <div className="container">
        <div className="content-bid-page">
          <a href="/onprogress">
            <button type="button" className="btn btn-primary">
              Close
            </button>
          </a>
          <div className="table-outter wrapper">
            <table className="table table-light table-striped table-hover table-bordered ">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Bidder</th>
                  <th scope="col">Asked Price</th>
                  <th scope="col">Bid On</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {storeArray.map((store, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{store.id}</th>
                      <td>{store.bidder}</td>
                      <td>{store.harga_tawar}</td>
                      <td>{store.created_at}</td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic outlined button group">
                          <button
                            onClick={() => {
                              const confirmBox = window.confirm("Are you sure you want to accept this bid?");
                              if (confirmBox == true) {
                              }
                              accbid(store.user_id, store.harga_tawar);
                            }}
                            className="btn btn-success"
                          >
                            Accept
                          </button>

                          <button
                            onClick={() => {
                              const confirmBox = window.confirm("Are you sure you want to reject this bid?");
                              if (confirmBox == true) {
                              }
                              delbid(store.id);
                            }}
                            className="btn btn-danger"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidPage;
