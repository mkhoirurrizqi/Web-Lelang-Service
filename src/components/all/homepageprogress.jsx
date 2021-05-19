import React, { useState ,useEffect} from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import {ReactNumberFormat} from "./numberformat";
import { useSelector } from "react-redux";
const HomeProgress = () => {
  const role = useSelector(data => data.user.role);
  const [technician, setTechnician] = useState("");
  const [storeArray, setStoreArray] = useState([]);
  const token = useSelector((data) => data.user.token);
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
              harga_awal: element.harga_awal,
              harga_fix: element.harga_fix,
              deskripsi: element.deskripsi,
              lokasi: element.lokasi,
              jenis: element.jenis,
              tanggal_akhir_bid: element.tanggal_akhir_bid,
              user_id: element.user_id,
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
    const getusername = (id) => {
      if(id){
        fetch("https://web-lelang.herokuapp.com/api/getusername", {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          }, body: JSON.stringify({
            user_id: id,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then((responseJson) => {
            console.log(responseJson);
            setTechnician( responseJson.name);
          })
          .catch((error) => {
            console.error(error);
          });
      }else{
        return "-";
      }
          };
  return (
    <div>
      {role != "admin" ? <NavbarT /> : <NavbarA />}
      <div className="container">
        <div className="content-onprogress-project">
          <div className="row">
          {storeArray.map((store, i) => {
            return (
          <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">L{store.judul}</h3>
                <p className="card-text project-desc">{store.deskripsi}</p>
              <div className="project-field">
                <p className="text-center project-fixed-price">Fixed Price : <ReactNumberFormat value={store.harga_fix} /></p>
                <p className="text-center project-location">Location : {store.lokasi}</p>
                <p className="text-center project-hardware-type">Type : {store.jenis}</p>
                <p className="text-center project-technisian">Technisian : {getusername(store.user_id)}{technician}</p>
                </div>
                <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" className="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
              </div>
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
