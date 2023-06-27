import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const IndexHeader = ({ handleSlide }) => {
  const isAuthorize = useContext(GlobalContext).isAuthorize;
  const user = useContext(GlobalContext).user;

  return (
    <div className="index-header-container">
      <div>
        <img
          src={require("../images/logo-white.png")}
          alt="SmartBank"
          onClick={handleSlide}
        />
        <div>
          <ul>
            <li onClick={handleSlide}>Home</li>
            <li onClick={handleSlide}>Features</li>
            <li onClick={handleSlide}>About</li>
            <li onClick={handleSlide}>Contact</li>
          </ul>
          <div>
            <Link to={"/main"}>
              {isAuthorize ? `Dashboard` : "Login"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexHeader;
