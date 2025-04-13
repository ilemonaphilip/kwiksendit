// src/contexts/TransactionContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create the Context object
const TransactionContext = createContext();

// 2. Hook to use the context
export function useTransactionContext() {
  return useContext(TransactionContext);
}

// 3. Provider component that wraps your entire app
export function TransactionProvider({ children }) {
  // We'll store transactions in state here
  const [transactions, setTransactions] = useState([]);

  // Add a new transaction to the list
  function addTransaction(tx) {
    setTransactions((prev) => [...prev, tx]);
  }

  // Retrieve a single transaction by ID
  function getTransactionById(id) {
    return transactions.find((tx) => tx.id === id) || null;
  }

  // Optionally, update a transaction’s process stage
  function updateTransactionStage(id, newStage) {
    setTransactions((prev) =>
      prev.map((tx) =>
        tx.id === id
          ? {
              ...tx,
              stage: newStage,
            }
          : tx
      )
    );
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, getTransactionById, updateTransactionStage }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
