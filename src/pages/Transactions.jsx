import React, { useState } from "react";
import BackButton from "../components/BackButton";

function Transactions() {
  // Dummy transactions data
  const transactionsData = [
    { id: 1, date: "2025-04-05", description: "Sent money", amount: "- NGN 5,000" },
    { id: 2, date: "2025-04-04", description: "Received money", amount: "+ NGN 10,000" },
    { id: 3, date: "2025-04-03", description: "Exchange", amount: "- NGN 2,000" },
  ];

  const [filterText, setFilterText] = useState("");
  const filteredTransactions = transactionsData.filter((tx) =>
    tx.description.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="page-content">
      <BackButton />
      <h2>Transaction History</h2>
      <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search transactions"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </form>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
