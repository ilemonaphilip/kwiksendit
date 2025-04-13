import React, { useState } from "react";
import BackButton from "../components/BackButton";

function SendMoney() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!recipient.trim()) {
      setError("Please enter a recipient.");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount greater than zero.");
      return;
    }
    setError("");

    // In a real app, you would process the transaction here
    console.log("Sending", amount, "to", recipient);
    alert(`Money sent: ${amount} to ${recipient}`);
    // Clear the form fields (optional)
    setRecipient("");
    setAmount("");
  };

  return (
    <div className="page-content">
      <BackButton />
      <h2>Send Money</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Recipient:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient name"
            required
          />
        </label>
        <label>
          Amount (in NGN):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-button">
          Send Money
        </button>
      </form>
    </div>
  );
}

export default SendMoney;
