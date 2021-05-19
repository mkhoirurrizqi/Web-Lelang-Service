import React, { useState } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import { useSelector } from "react-redux";

const HomeDone = () => {
  const [role, setRole] = useState("");
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
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDone;
