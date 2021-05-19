import React, { useState ,useEffect } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import { useSelector } from "react-redux";
import {ReactNumberFormat} from "./numberformat";

const HomeDone = (props) => {
  const role = useSelector(data => data.user.role);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [initprice, setInitPrice] = useState("");
  const [fixprice, setFixPrice] = useState("");
  const [location, setLocation] = useState("");
  const [hardware, setHardware] = useState("");
  const [technician, setTechnician] = useState("");
  const token = useSelector((data) => data.user.token);

  return (
    <div>
      {role != "admin" ? <NavbarT /> : <NavbarA />}
      <div className="container">
        <div className="content-done-project">
          <div className="row">
          <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-initial-price">Open Price : <ReactNumberFormat value={initprice} /></p>
                <p className="text-center project-fixed-price">Fixed Price : <ReactNumberFormat value={fixprice} /></p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-initial-price">Open Price : Rp. 35000</p>
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
              </div>
            </div> 
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-initial-price">Open Price : Rp. 35000</p>
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
              </div>
            </div> 
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-initial-price">Open Price : Rp. 35000</p>
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-initial-price">Open Price : Rp. 35000</p>
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDone;
