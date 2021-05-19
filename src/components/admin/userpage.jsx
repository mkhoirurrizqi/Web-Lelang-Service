import React, { useState, useEffect } from "react";
import NavbarA from "../admin/navbaradmin";
import { useSelector } from "react-redux";

const UserPage = () => {
  const role = useSelector((data) => data.user.role);
  const token = useSelector((data) => data.user.token);
  const id = useSelector((data) => data.user.id);

  const [userArray, setUserArray] = useState([]);

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
                        <a type="button" className="btn btn-primary" href="/user/edit">
                          Edit
                        </a>
                        <form action="" method="post" className="d-inline">
                          <button className="btn btn-warning">Delete</button>
                        </form>
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
