import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useTransactionContext } from "../contexts/TransactionContext";

function Transactions() {
  const { transactions } = useTransactionContext();
  const [filterText, setFilterText] = useState("");

  // Filter transactions by recipient name, transaction ID, or stage.
  const filteredTx = transactions.filter((tx) => {
    const search = filterText.toLowerCase();
    return (
      tx.recipient.name.toLowerCase().includes(search) ||
      tx.id.toLowerCase().includes(search) ||
      (tx.stage && tx.stage.toLowerCase().includes(search))
    );
  });

  return (
    <div className="page-content">
      <BackButton />
      <h2>Transaction History</h2>
      <input
        type="text"
        placeholder="Search transactions"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="filter-input"
      />

      {/* Wrap the table in a scrollable container */}
      <div className="transactions-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Stage</th>
            </tr>
          </thead>
          <tbody>
            {filteredTx.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredTx.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.date || "----"}</td>
                  <td>
                    <Link
                      to={`/app/transactions/${tx.id}`}
                      style={{ color: "#007bff", textDecoration: "underline" }}
                    >
                      {tx.id}
                    </Link>
                  </td>
                  <td>{tx.recipient.name}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.stage}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
