import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <img src={require('../images/logo-black.png')} alt="SmartBank" />
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
        />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to={"/main/login"}>Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
