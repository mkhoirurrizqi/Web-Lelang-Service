import React, { useState } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import {ReactNumberFormat} from "./numberformat";

const HomeActive = (props) => {
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [initprice, setInitPrice] = useState("");
  const [location, setLocation] = useState("");
  const [hardware, setHardware] = useState("");
  const [lastday, setLastDay] = useState("");
  // if (useSelector((data) => data.user.token)) {
  //   return <Redirect to="/" />;
  // }
  const token = useSelector((data) => data.user.token);
  // const token = useSelector((data) => data.user.token);
  // const id = useSelector((data) => data.user.id);
  // console.log("initoken: ", token);
  // console.log("iniid: ", id);
  // console.log(
  //   "ttkn: ",
  //   useSelector((data) => data.user.token)
  // );
  return (
    <div>
      {/* {token},{id} */}
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
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
                <div className="project-field">
                <p className="text-center project-initial-price">Open Price : <ReactNumberFormat value={initprice} /></p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-last-day">Date end : 2021-05-20</p>
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
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
                <div className="project-field">
                <p className="text-center project-initial-price">Open Price : 35000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-last-day">Date end : 2021-05-20</p>
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
            </div><div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
                <div className="project-field">
                <p className="text-center project-initial-price">Open Price : 35000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-last-day">Date end : 2021-05-20</p>
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
            </div><div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
                <div className="project-field">
                <p className="text-center project-initial-price">Open Price : 35000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-last-day">Date end : 2021-05-20</p>
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
            </div><div className="card">
              <div className="card-body">
                <h3 className="text-center card-title project-title">Laptop Blackscreen</h3>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
                <div className="project-field">
                <p className="text-center project-initial-price">Open Price : 35000</p>
                <p className="text-center project-location">Location : Lampung Selatan</p>
                <p className="text-center project-hardware-type">Type : Laptop</p>
                <p className="text-center project-last-day">Date end : 2021-05-20</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActive;
