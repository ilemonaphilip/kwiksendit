// src/components/BackButton.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function BackButton() {
  return (
    <NavLink to="/app" className="back-button">
      &larr; Back
    </NavLink>
  );
}

export default BackButton;
