import React, { useState } from "react";
import NavbarT from "../teknisi/navbartechnician";
import NavbarA from "../admin/navbaradmin";

const HomeActive = (props) => {
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [initprice, setInitPrice] = useState("");
  const [location, setLocation] = useState("");
  const [hardware, setHardware] = useState("");
  const [lastday, setLastDay] = useState("");
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
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-last-day">2021-05-20</li>
              </ul>

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
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-last-day">2021-05-20</li>
              </ul>
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
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-last-day">2021-05-20</li>
              </ul>
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
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-last-day">2021-05-20</li>
              </ul>
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
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-last-day">2021-05-20</li>
              </ul>
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
                <h5 className="card-title project-title">Laptop Blackscreen</h5>
                <p className="card-text project-desc">Ketika laptop dihidupkan, tidak tampila apa-apa, hanya layar hitam</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item project-initial-price">35000</li>
                <li className="list-group-item project-location">Lampung Selatan</li>
                <li className="list-group-item project-hardware-type">Laptop</li>
                <li className="list-group-item project-last-day">2021-05-20</li>
              </ul>
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
