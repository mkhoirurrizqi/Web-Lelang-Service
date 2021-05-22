import React, { useState, useEffect } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ReactNumberFormat } from "./numberformat";
import { useHistory } from "react-router-dom";
const HomeActive = () => {
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const [storeArray, setStoreArray] = useState([]);
  const [bidArray, setBidArray] = useState([]);
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);

  if (!token) {
    history.push("/");
  }
  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/activeproject", {
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
        setStoreArray([]);
        responseJson.forEach((element) => {
          setStoreArray((storeArray) => [
            ...storeArray,
            {
              id: element.id,
              judul: element.judul,
              harga_awal: element.harga_awal,
              deskripsi: element.deskripsi,
              lokasi: element.lokasi,
              jenis: element.jenis,
              tanggal_akhir_bid: element.tanggal_akhir_bid,
            },
          ]);
        });
        console.log(responseJson);
        console.log(storeArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (role == "technician") {
      fetch("https://web-lelang.herokuapp.com/api/myBid", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: id,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then((responseJson) => {
          setBidArray([]);
          responseJson.forEach((element) => {
            setBidArray((bidArray) => [
              ...bidArray,
              {
                project_id: element.project_id,
              },
            ]);
          });
          console.log("ini my bid", responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const cancelBid = (projectid) => {
    fetch("https://web-lelang.herokuapp.com/api/deleteBid", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        project_id: projectid,
      }),
    })
      .then(function (response) {
        return response;
      })
      .then((responseJson) => {
        history.go(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createBid = (projectid) => {
    history.push({ pathname: `/active/bidproject/${projectid}` });
  };

  const editprojectPost = (id) => {
    console.log("id edit: ", id);
    // history.push({ pathname: `/active/edit/${id}` });
    history.push({
      pathname: "/active/edit/" + id,
      state: { id: id },
    });
  };

  const deleteprojectPost = (deleteid) => {
    fetch("https://web-lelang.herokuapp.com/api/deleteProject", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: deleteid,
      }),
    })
      .then(function (response) {
        return response;
      })
      .then((responseJson) => {
        console.log("resp:", responseJson);
        history.go(0); //refresh page
      })
      .catch((error) => {
        console.error("err", error);
      });
  };
  const bidderprojectPost = (id) => {
    console.log("id edit: ", id);
    history.push({ pathname: `/onprogress/bid/${id}` });
    // history.push({
    //   pathname: "/onprogress/bid/"+id,
    //   state:{  idproject:id }
    // });
  };
  return (
    <div>
      {role != "admin" ? <NavbarT /> : <NavbarA />}
      <div className="container">
        <div className="content-active-project">
          {role != "admin" ? (
            <span></span>
          ) : (
            <a href="/active/create">
              <button type="button" className="btn btn-create btn-primary">
                Create
              </button>
            </a>
          )}
          <div className="row">
            {storeArray.map((store, i) => {
              let print = 0;
              {
                bidArray.map((bid) => {
                  if (store.id == bid.project_id) {
                    print = print + 1;
                  }
                });
              }
              return (
                <div className="card" key={i}>
                  <div className="card-body">
                    <h3 className="text-center card-title project-title">{store.judul}</h3>
                    <p className="card-text project-desc">{store.deskripsi}</p>
                    <div className="project-field">
                      <p className="text-center project-initial-price">
                        Open Price : <ReactNumberFormat value={store.harga_awal} />
                      </p>
                      <p className="text-center project-location">Location : {store.lokasi}</p>
                      <p className="text-center project-hardware-type">Type : {store.jenis}</p>
                      <p className="text-center project-last-day">Date end : {store.tanggal_akhir_bid}</p>
                    </div>
                  </div>

                  {role != "admin" ? (
                    <div className="card-body card-btn">
                      {print > 0 ? (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            const confirmBox = window.confirm("Are you sure you want to cancel this bid?");
                            if (confirmBox == true) {
                              cancelBid(store.id);
                            }
                          }}
                        >
                          Cancel
                        </button>
                      ) : (
                        <button type="button" className="btn btn-primary" onClick={() => createBid(store.id)}>
                          Bid
                        </button>
                      )}
                      {/* <button type="button" className="btn btn-primary" onClick={() => createBid(store.id)}>
                        Bid
                      </button> */}
                    </div>
                  ) : (
                    <div className="card-body card-btn">
                      <a href="" onClick={() => editprojectPost(store.id)} className="card-link ">
                        <button type="button" className="btn btn-primary mt-3">
                          Edit
                        </button>
                      </a>
                      <a
                        href="#"
                        onClick={() => {
                          const confirmBox = window.confirm("Are you sure you want to delete this project?");
                          if (confirmBox == true) {
                            deleteprojectPost(store.id);
                          }
                        }}
                        className="card-link"
                      >
                        <button type="button" className="btn btn-warning">
                          Delete
                        </button>
                      </a>
                      <a href="#" onClick={() => bidderprojectPost(store.id)} className="card-link ">
                        <button type="button" className="btn btn-secondary mt-3">
                          Bidder
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActive;
