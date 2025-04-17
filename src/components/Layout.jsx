// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="home-page">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
