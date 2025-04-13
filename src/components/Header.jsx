import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">KwikSendIt</div>
      <NavLink to="/profile" className="profile-link">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-pic"
        />
      </NavLink>
    </header>
  );
}

export default Header;
