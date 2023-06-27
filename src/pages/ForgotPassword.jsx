import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const isAuthorize = useContext(GlobalContext).isAuthorize;
  const navigate = useNavigate

  useEffect(() => {
    if(isAuthorize) navigate('/main')
  }, [isAuthorize]);

  return (
    <div className="forgot-password-container">
      <form>
        <input type="email" placeholder="Email" />
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  );
};

export default ForgotPassword;
