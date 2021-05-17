import React from "react";

const EditProject = () => {
  return (
    <div className="wrap">
      <div className="content-edit-project-page">
        <div className="cancel-side col-4">
          <a href="/active">
            <img src="/img/icons8_cancel_127px_2.png" alt="cancel-button" />
          </a>
        </div>
        <div className="putih col-8">
          <div className="header">
            <h1>EDIT PROJECT</h1>
          </div>
          <form action="">
            <div className="input-wrap">
              <div className="input-group mb-3">
                <label className="input-group-text">Status</label>
                <select className="form-select" id="role-dropdown">
                  <option selected>Choose...</option>
                  <option value="Active">Active</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="title" placeholder="Title" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="initialprice" placeholder="Initial Price" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="description" placeholder="Description" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="location" placeholder="Location" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="hardware" placeholder="Hardware Type" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="lastday" placeholder="Last Bidding Day" />
              </div>
            </div>
            <div className="btn-wrap">
              <a href="/active" className="edit-project-btn">
                <button type="button" className="btn btn-primary">
                  Update
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
