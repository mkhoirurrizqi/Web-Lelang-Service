import React, { useState, useEffect } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import { ReactNumberFormat } from "./numberformat";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const HomeProgress = () => {
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const [technician, setTechnician] = useState("");
  const [storeArray, setStoreArray] = useState([]);
  const token = useSelector((data) => data.user.token);

  if (!token) {
    history.push("/login");
  }

  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/onprogressproject", {
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
              name: element.name,
              harga_awal: element.harga_awal,
              harga_fix: element.harga_fix,
              deskripsi: element.deskripsi,
              lokasi: element.lokasi,
              jenis: element.jenis,
              tanggal_akhir_bid: element.tanggal_akhir_bid,
              user_id: element.user_id,
              id: element.id,
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

  const bidderprojectPost = (id) => {
    console.log("id edit: ", id);
    history.push({ pathname: `/onprogress/bid/${id}` });
    // history.push({
    //   pathname: "/onprogress/bid/"+id,
    //   state:{  idproject:id }
    // });
  };
  const editprojectPost = (id) => {
    console.log("id edit: ", id);
    // history.push({ pathname: `/active/edit/${id}` });
    history.push({
      pathname: "/onprogress/edit/" + id,
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
  return (
    <div>
      {role != "admin" ? <NavbarT /> : <NavbarA />}
      <div className="container">
        <div className="content-onprogress-project">
          <div className="row">
            {storeArray.map((store, i) => {
              return (
                <div className="card"  key={i}>
                  <div className="card-body">
                    <h3 className="text-center card-title project-title">L{store.judul}</h3>
                    <p className="card-text project-desc">{store.deskripsi}</p>
                    <div className="project-field">
                      <p className="text-center project-fixed-price">
                        Fixed Price : <ReactNumberFormat value={store.harga_fix} />
                      </p>
                      <p className="text-center project-location">Location : {store.lokasi}</p>
                      <p className="text-center project-hardware-type">Type : {store.jenis}</p>
                      <p className="text-center project-technisian">
                        Technisian : {store.name ?
                        (store.name):("-")
                        }
                      </p>
                    </div>
                    </div>
                    {role != "admin" ? (
            <label></label>
          ) : (
            <div className="card-body card-btn">
            <a href="" onClick={() => editprojectPost(store.id)} className="card-link">
              <button type="button" className="btn btn-primary mt-3">
                Edit
              </button>
            </a>
            <a href="#" onClick={() => deleteprojectPost(store.id)} className="card-link">
              <button type="button" className="btn btn-warning mt-3">
                Delete
              </button>
            </a>
            <a href="#" onClick={() => bidderprojectPost(store.id)}className="card-link">
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

export default HomeProgress;
