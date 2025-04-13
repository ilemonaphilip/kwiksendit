import React, { useState } from "react";
import BackButton from "../components/BackButton";

function Profile() {
  // Dummy initial values; in a real app, these come from user data
  const [name, setName] = useState("Philip");
  const [email, setEmail] = useState("philip@example.com");
  const [phone, setPhone] = useState("08012345678");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, submit the data to the server
    console.log("Updated profile:", { name, email, phone });
    setMessage("Profile updated successfully.");
    // Optionally, clear the message after a few seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="page-content">
      <BackButton />
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        {message && <p className="success-message">{message}</p>}
        <button type="submit" className="submit-button">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
