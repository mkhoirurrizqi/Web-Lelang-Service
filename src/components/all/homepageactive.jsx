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
  const token = useSelector((data) => data.user.token);

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
                      <a href="#" className="card-link">
                        <button type="button" className="btn btn-primary">
                          Bid
                        </button>
                      </a>
                    </div>
                  ) : (
                    <div className="card-body card-btn">
                      <a href="/active/edit" className="card-link">
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>
                      </a>
                      <a href="#" className="card-link">
                        <button type="button" className="btn btn-warning">
                          Delete
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
