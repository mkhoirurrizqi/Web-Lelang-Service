import React, { useState } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import {ReactNumberFormat} from "./numberformat";
import { useSelector } from "react-redux";
const HomeProgress = () => {
  const role = useSelector(data => data.user.role);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fixprice, setFixPrice] = useState("");
  const [location, setLocation] = useState("");
  const [hardware, setHardware] = useState("");
  const [technician, setTechnician] = useState("");
  return (
    <div>
      {role != "admin" ? <NavbarT /> : <NavbarA />}
      <div className="container">
        <div className="content-onprogress-project">
          <div className="row">
          <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-fixed-price">Fixed Price : <ReactNumberFormat value={fixprice} /></p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
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
            
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
                <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" className="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
              </div>
            </div> <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
                <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" className="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
              </div>
            </div> <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
                </div>
                <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" className="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
              </div>
            </div> <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              <div className="project-field">
                <p className="text-center project-fixed-price">Fixed Price : Rp. 40000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-technisian">Technisian : Rizqi</p>
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProgress;
