import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useGlobalVariable, { GlobalContext } from "../context/GlobalContext";
import Index from "./Index";
import Login from "./Login";
import Response404 from "./Response404";
import Main from "./Main";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import AccountManagement from "../components/dashboard/AccountManagement";
import CardManagement from "../components/dashboard/CardManagement";

const InitPage = () => {
  const global = useGlobalVariable();
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <GlobalContext.Provider value={global}>
        <React.StrictMode>
          <Routes>
            <Route index element={<Index />} />
            <Route path="main" element={<Main />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<AccountManagement />} />
                <Route path={"card-management"} element={<CardManagement />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<Response404 />} />
            </Route>
            <Route path="*" element={<Response404 />} />
          </Routes>
        </React.StrictMode>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
};

export default InitPage;