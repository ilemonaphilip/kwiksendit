// src/contexts/TransactionContext.jsx
import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext(null);

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(tx) {
    setTransactions((prev) => [tx, ...prev]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactionContext() {
  const ctx = useContext(TransactionContext);
  if (!ctx) {
    throw new Error("useTransactionContext must be used inside <TransactionProvider>");
  }
  return ctx;
}
