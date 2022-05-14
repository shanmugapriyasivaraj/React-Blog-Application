import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../../Components/topbar/TopBar";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput "
          type="email"
          placeholder="Enter Your Email"
        />
        <label>Password</label>
        <input
          className="loginInput "
          type="password"
          placeholder="Enter Your Password"
        />
        <button className="loginButton">Login</button>
      </form>
      <buttton className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </buttton>
    </div>
  );
};

export default Login;
