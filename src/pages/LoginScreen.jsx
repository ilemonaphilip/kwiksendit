// src/pages/LoginScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    console.log("Logging in as:", username);
    // On success:
    navigate("/app");
  };

  return (
    <div className="home-page">
      <div className="page-content">
        <h2 className="page-header">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
