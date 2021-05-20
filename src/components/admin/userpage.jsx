import React, { useState, useEffect } from "react";
import NavbarA from "../admin/navbaradmin";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UserPage = () => {
  let history = useHistory();
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);

  const [userArray, setUserArray] = useState([]);

  if (!token) {
    history.push("/");
  }
  if (role != "admin") {
    history.push("/active");
  }

  useEffect(() => {
    fetch("https://web-lelang.herokuapp.com/api/showalluser", {
      method: "POST",
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
        console.log(responseJson);
        setUserArray([]);
        responseJson.forEach((element) => {
          setUserArray((userArray) => [
            ...userArray,
            {
              id: element.id,
              name: element.name,
              nim: element.nim,
              nohp: element.nohp,
              role: element.role,
              username: element.username,
              email: element.email,
            },
          ]);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteUserPost = (deleteid) => {
    fetch("https://web-lelang.herokuapp.com/api/deleteuser", {
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

  const editUserPost = (editid) => {
    console.log("id edit: ", editid);
    history.push({ pathname: `/user/edit/${editid}` });
  };

  return (
    <div>
      <NavbarA />
      <div className="container">
        <div className="content-user-page">
          <a href="/user/create">
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </a>
          <table className="table table-light table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Numb</th>
                <th scope="col">Role</th>
                <th scope="col">Name</th>
                <th scope="col">NIM</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {userArray.map((user, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{user.role}</td>
                    <td>{user.name}</td>
                    <td>{user.nim}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.nohp}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic outlined button group">
                        <button type="button" className="btn btn-primary" onClick={() => editUserPost(user.id)}>
                          Edit
                        </button>
                        {user.email == "admin@admin.com" ? (
                          <span></span>
                        ) : (
                          <button className="btn btn-warning" onClick={() => deleteUserPost(user.id)}>
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
