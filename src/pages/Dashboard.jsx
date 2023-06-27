import React, { useContext, useEffect, useRef } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuthorize = useContext(GlobalContext).isAuthorize;
  const sidebarList = useRef();

  useEffect(() => {
    if (!isAuthorize) navigate("/main/login");
  }, [isAuthorize]);

  const handleActive = (e) => {
    const list = sidebarList.current.querySelectorAll("a li");
    console.log(list)
    const activeLi = Array.from(list).find(element => element.classList.contains('active'));
    activeLi.classList.remove('active')
    e.currentTarget.classList.add('active')
  };
  
  return (
    <main className="dashboard-container">
      <section className="sidebar">
        <ul ref={sidebarList}>
          <Link to={"/main/dashboard"}>
            <li className="active" onClick={handleActive}>
              Account Management
            </li>
          </Link>
          <Link to={"card-management"}>
            <li onClick={handleActive}>Card Management</li>
          </Link>
          <Link>
            <li onClick={handleActive}>Fund Transfers</li>
          </Link>
          <Link>
            <li onClick={handleActive}>Bill Payments</li>
          </Link>
          <Link>
            <li onClick={handleActive}>Buy A Load</li>
          </Link>
          <Link>
            <li onClick={handleActive}>ATM/Branch Locator</li>
          </Link>
          <Link>
            <li onClick={handleActive}>Personal Finance Tools</li>
          </Link>
          <Link>
            <li onClick={handleActive}>Help</li>
          </Link>
        </ul>
        <img src={require("../images/logo-black.png")} alt="SmartBank" />
      </section>
      <section className="dashboard-main">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
