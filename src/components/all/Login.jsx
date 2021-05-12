import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <p>Welcome</p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
};
export default Login;
