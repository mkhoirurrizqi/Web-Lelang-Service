import React, { useState ,useEffect} from "react";
import NavbarA from "../admin/navbaradmin";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BidPage = () => {
  const [bidder, setBidder] = useState("");
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const [storeArray, setStoreArray] = useState([]);
  const idproject = history.location.state.idproject;

  if (!token) {
    history.push("/");
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
        responseJson.forEach((element) => {
          setStoreArray((storeArray) => [
            ...storeArray,
            {
        user_id:element.user_id,
        id:element.id,
        created_at:element.created_at,
        harga_tawar:element.harga_tawar,
      },
    ]);
  });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const getusername = (id) => {
    if (id) {
      fetch("https://web-lelang.herokuapp.com/api/getusername", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson);
          setBidder(responseJson.name);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return "-";
    }
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
          <table className="table table-light table-striped table-hover table-bordered">
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
                <th>{store.id}</th>
                <td>{getusername(store.user_id)}{bidder}</td>
                <td>{store.harga_tawar}</td>
                <td>{store.created_at}</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic outlined button group">
                    <a type="button" className="btn btn-success" href="">
                      Accept
                    </a>
                    <form action="" method="post" className="d-inline">
                      <button className="btn btn-danger">Reject</button>
                    </form>
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
  );
};

export default BidPage;
