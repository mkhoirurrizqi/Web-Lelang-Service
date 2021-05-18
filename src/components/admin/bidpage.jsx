import React, { useState } from "react";
import NavbarA from "../admin/navbaradmin";

const BidPage = () => {
  const [bidderid, setBidderId] = useState("");
  const [bidder, setBidder] = useState("");
  const [bidon, setBidOn] = useState("");
  const [askedprice, setAskedPrice] = useState("");
  return (
    <div>
      <NavbarA />
      <div className="container">
        <div className="content-bid-page">
          <a href="/onprogress">
            <button type="button" className="btn btn-primary">
              Close
            </button>
          </a>
          <table className="table table-light table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Bidder</th>
                <th scope="col">Asked Price</th>
                <th scope="col">Bid On</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Bruno Mars</td>
                <td>50000</td>
                <td>2021-05-17 23:59:40</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic outlined button group">
                    <a type="button" className="btn btn-success" href="">
                      Accept
                    </a>
                    <form action="" method="post" className="d-inline">
                      <button className="btn btn-danger">Reject</button>
                    </form>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Subro</td>
                <td>40000</td>
                <td>2021-05-18 02:41:57</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic outlined button group">
                    <a type="button" className="btn btn-success" href="">
                      Accept
                    </a>
                    <form action="" method="post" className="d-inline">
                      <button className="btn btn-danger">Reject</button>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidPage;
