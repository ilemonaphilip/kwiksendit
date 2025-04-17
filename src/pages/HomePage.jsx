// src/pages/HomePage.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const username = "Philip";
  const balance = "NGN 21,385,421.15";

  return (
    <>
      {/* A hero section at the top */}
      <section className="hero-section">
        <h2>Welcome, {username}!</h2>
        <p className="balance">Your Balance: <strong>{balance}</strong></p>
      </section>

      {/* Feature Tiles */}
      <section className="features">
        <NavLink to="/app/send-money" className="feature-tile">
          <div className="icon-wrapper">💸</div>
          <h4>Send Money</h4>
          <p>Transfer funds instantly.</p>
        </NavLink>
        <NavLink to="/app/transactions" className="feature-tile">
          <div className="icon-wrapper">📜</div>
          <h4>Transactions</h4>
          <p>View your history.</p>
        </NavLink>
        <NavLink to="/app/exchange-rates" className="feature-tile">
          <div className="icon-wrapper">💱</div>
          <h4>Exchange Rates</h4>
          <p>Check current rates.</p>
        </NavLink>
        <NavLink to="/app/profile" className="feature-tile">
          <div className="icon-wrapper">👤</div>
          <h4>Profile Settings</h4>
          <p>Manage your account.</p>
        </NavLink>
      </section>
    </>
  );
}

export default HomePage;
