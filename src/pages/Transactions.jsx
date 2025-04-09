import React from 'react';
import Header from '../components/Header';

function Transactions() {
  // Example transaction data
  const transactions = [
    { id: 1, date: '2025-04-05', amount: '€100', status: 'Completed' },
    { id: 2, date: '2025-04-04', amount: '€50', status: 'Pending' },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="page-header">Transaction History</h2>
        {transactions.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id}>
                  <td>{tx.date}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;
