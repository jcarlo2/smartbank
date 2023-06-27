import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    username: undefined,
    password: undefined,
  });
  const password = useRef();
  const isAuthorize = useContext(GlobalContext).isAuthorize;

  useEffect(() => {
    if(isAuthorize) navigate('/main')
  }, [isAuthorize]);

  const handleSlide = (e) => {
    console.log(window.location.hash);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleShowPassword = (e) => {
    const isText = password.current.type === "text";
    password.current.type = isText ? "password" : "text";
    if (isText) {
      e.target.classList.remove("fa-eye");
      e.target.classList.add("fa-eye-slash");
    } else {
      e.target.classList.add("fa-eye");
      e.target.classList.remove("fa-eye-slash");
    }
  };

  return (
    <main className="login-container">
      <img src={require("../images/logo-black.png")} alt="SmartBank" />
      <form onSubmit={handleSubmit}>
        {errors.username && <div className="invalid">{errors.username}</div>}
        <input type="text" placeholder="Username or Email" name="username" />
        {errors.password && <div className="invalid">{errors.password}</div>}
        <div>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            name="password"
          />
          <i className="fa-solid fa-eye-slash" onClick={handleShowPassword}></i>
        </div>
        <label htmlFor="remember_me">
          Remember me
          <input type="checkbox" name="remember_me" />
        </label>
        <input type="submit" value="Login" />
      </form>
      <p>
        Do not have an account yet?{" "}
        <Link to={"/main/register"}>Sign up now</Link>
      </p>
      <Link to={"/main/forgot-password"}>Forgot Password</Link>
    </main>
  );
};

export default Login;
