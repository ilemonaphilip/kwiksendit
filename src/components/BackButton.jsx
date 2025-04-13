import React from 'react';
import { NavLink } from 'react-router-dom';

function BackButton() {
  return (
    <div className="back-button-container" style={{ marginBottom: '16px' }}>
      <NavLink to="/" className="back-button">
        &larr; Back to Home
      </NavLink>
    </div>
  );
}

export default BackButton;
