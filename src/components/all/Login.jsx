import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { tokeniduser } from "../redux/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  let history = useHistory();

  const login = () => {
    const dataAPI = {
      email: email,
      password: password,
    };

    axios.get("https://web-lelang.herokuapp.com/sanctum/csrf-cookie").then((response) => {
      axios
        .post("https://web-lelang.herokuapp.com/api/login", dataAPI)
        .then((result) => {
          console.log("res: ", result);
          console.log("token: ", result.data.token);
          console.log(result.data.user.email);
          console.log("id: ", result.data.user.id);
          setToken(result.data.token);
          dispatch(tokeniduser(result.data.token, result.data.user.id));
          history.push("/active");
        })
        .catch((err) => console.log("err ", err));
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
