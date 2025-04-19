// src/pages/LoginScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginScreen() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication and store user info in context
    login(username, "NGN 21,385,421.15"); // Replace balance as needed
    console.log("Logging in as:", username);
    // On successful login, navigate to the protected app area
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
