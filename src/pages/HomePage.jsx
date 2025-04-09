import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../components/Header";

function HomePage() {
  return (
    <div className="home-page">
      {/* Example header — uncomment if you want to keep your old Header */}
      { <Header />};

      <h2 className="page-header">Welcome, [User Name]!</h2>
      <p>Your account summary goes here (e.g., current balance, quick stats, etc.).</p>

      <h3 style={{ marginTop: "40px" }}>Features</h3>
      <div className="features">
        <NavLink to="/send-money" className="feature-card">
          <h4>Send Money</h4>
          <p>Transfer funds instantly at competitive exchange rates.</p>
        </NavLink>

        <NavLink to="/transactions" className="feature-card">
          <h4>Transaction History</h4>
          <p>View your past transfers and track your transactions.</p>
        </NavLink>

        <NavLink to="/exchange-rates" className="feature-card">
          <h4>Exchange Rates</h4>
          <p>Check current EUR-to-Naira conversion rates.</p>
        </NavLink>

        <NavLink to="/profile" className="feature-card">
          <h4>Profile Settings</h4>
          <p>Manage your profile and security settings.</p>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
