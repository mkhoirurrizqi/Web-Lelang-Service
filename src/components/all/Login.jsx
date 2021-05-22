import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { tokenidroleuser } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [loggin, setLogin] = useState(true);
  let history = useHistory();

  if (useSelector((data) => data.user.token)) {
    history.push("/active");
  }

  const login = () => {
    const dataAPI = {
      email: email,
      password: password,
    };

    axios.get("https://web-lelang.herokuapp.com/sanctum/csrf-cookie").then((response) => {
      axios
        .post("https://web-lelang.herokuapp.com/api/login", dataAPI)
        .then((result) => {
          if (result) {
            setLogin(true);
          }
          console.log("res: ", result);
          console.log("token: ", result.data.token);
          console.log(result.data.user.email);
          console.log("id: ", result.data.user.id);
          setToken(result.data.token);
          setRole(result.data.role);
          dispatch(tokenidroleuser(result.data.token, result.data.user.id, result.data.role));
          history.push("/active");
        })
        .catch((err) => {
          console.log("err ", err);
          setLogin(false);
        });
    });
  };
  return (
    <div className="wrap">
      <div className="content-login-page">
        <div className="putih">
          <div className="header">
            <h1>Welcome back!</h1>
            <h1>Glad to have you back</h1>
          </div>
          <form>
            <div className="input-wrap">
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            {loggin ? (
              <p className="pt-4"></p>
            ) : (
              <p className="text-center" style={{ color: "red" }}>
                Login failed, try again
              </p>
            )}
            <div className="btn-wrap">
              <a className="login-btn">
                <button type="button" className="btn btn-primary" onClick={login}>
                  Login
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
