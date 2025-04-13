import React, { useState } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

function SendMoney() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Sending ${amount} to ${recipient}`);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="page-header">Send Money</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            Recipient Name:
            <input 
              type="text" 
              value={recipient} 
              onChange={(e) => setRecipient(e.target.value)} 
              placeholder="Enter recipient name" 
              required 
            />
          </label>
          <label>
            Amount (in EUR):
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Enter amount in EUR" 
              required 
            />
          </label>
          <button type="submit" className="button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default SendMoney;
