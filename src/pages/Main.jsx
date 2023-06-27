import React, { useEffect, useContext } from "react";
import { Outlet, redirect, useHref, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ProfileHeader from "../components/ProfileHeader";
import { GlobalContext } from "../context/GlobalContext";

const Main = () => {
  const navigate = useNavigate();
  const href = useHref()
  const isAuthorize = useContext(GlobalContext).isAuthorize;

  useEffect(() => {
    console.log(href, isAuthorize)
    if (!isAuthorize) {
      console.log('AUTH')
      navigate("/main/login");
    }
    else if(href === '#/main/' || href === '#/main') navigate('/main/dashboard')
  }, [isAuthorize]);

  return (
    <>
      <ProfileHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
