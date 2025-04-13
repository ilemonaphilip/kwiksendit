import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="logo">KwikSendIt</div>
      
      {/* Profile picture on the right (click navigates to /profile) */}
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
