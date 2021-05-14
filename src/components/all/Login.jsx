import React, { useState } from "react";
import "../../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="wrap">
      <div className="content-login-page">
        <div className="putih">
          <div className="header">
            <h1>Welcome back!</h1>
            <h1>Glad to have you back</h1>
          </div>
          <form action="">
            <div className="input-wrap">
              <div class="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div className="btn-wrap">
              <a href="" className="login-btn">
                <button type="button" class="btn btn-primary">
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
