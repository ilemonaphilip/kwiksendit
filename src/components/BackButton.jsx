import React from "react";
import { NavLink } from "react-router-dom";

function BackButton() {
  return (
    <NavLink to="/" className="back-button">
      &larr; Back to Home
    </NavLink>
  );
}

export default BackButton;
