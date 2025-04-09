import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">KwikSendIt</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/send-money" className={({ isActive }) => (isActive ? 'active' : '')}>Send Money</NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/exchange-rates" className={({ isActive }) => (isActive ? 'active' : '')}>Exchange Rates</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink>
          </li>
          <li>
            <button className="button" onClick={() => console.log("Logout clicked")}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
