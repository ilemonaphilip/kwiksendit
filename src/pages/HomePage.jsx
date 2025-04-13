import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

function HomePage() {
  // Placeholder data (replace with dynamic user data as needed)
  const username = "Philip";
  const balance = "NGN 20,000";

  return (
    <div className="home-page">
      <Header />
      
      <div className="content-container">
        <h2 className="page-header">Welcome, {username}!</h2>
        <p className="intro-text">
          Your account balance is <strong>{balance}</strong>.
        </p>

        <h3 className="section-title">Features</h3>
        <div className="tiles">
          <NavLink to="/send-money" className="tile">
            <h4 className="tile-title">Send Money</h4>
            <p>Transfer funds instantly at competitive exchange rates.</p>
          </NavLink>

          <NavLink to="/transactions" className="tile">
            <h4 className="tile-title">Transaction History</h4>
            <p>View your past transfers and track your transactions.</p>
          </NavLink>

          <NavLink to="/exchange-rates" className="tile">
            <h4 className="tile-title">Exchange Rates</h4>
            <p>Check current EUR-to-Naira conversion rates.</p>
          </NavLink>

          <NavLink to="/profile" className="tile">
            <h4 className="tile-title">Profile Settings</h4>
            <p>Manage your profile and security settings.</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
