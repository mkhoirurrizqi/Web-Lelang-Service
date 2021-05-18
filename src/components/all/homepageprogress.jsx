import React, { useState } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";

const HomeProgress = () => {
  const [role, setRole] = useState("");
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
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>

              <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" class="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>

              <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" class="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>

              <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" class="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>

              <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" class="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>

              <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" class="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-fixed-price">40000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-technisian">Rizqi</li>
              </ul>

              <div className="card-body card-btn">
                <a href="/onprogress/bid" className="card-link">
                  <button type="button" class="btn btn-primary">
                    Bidder
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProgress;
