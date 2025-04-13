// src/pages/TransactionDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useTransactionContext } from "../contexts/TransactionContext";

function TransactionDetail() {
  const { id } = useParams();
  const { getTransactionById } = useTransactionContext();

  const transaction = getTransactionById(id);

  if (!transaction) {
    return (
      <div className="page-content">
        <BackButton />
        <h2>Transaction Not Found</h2>
        <p>No transaction found with ID: {id}</p>
      </div>
    );
  }

  // You can also show more fields if you store them in the transaction
  return (
    <div className="page-content">
      <BackButton />
      <h2>Transaction Details</h2>
      <p><strong>ID:</strong> {transaction.id}</p>
      <p><strong>Date:</strong> {transaction.date}</p>
      <p><strong>Recipient:</strong> {transaction.recipient.name}</p>
      <p><strong>Amount:</strong> {transaction.amount} NGN</p>
      <p><strong>Stage:</strong> {transaction.stage}</p>
      {/* If you store additional data, like bank, account #, currency, etc., show them here */}
      {transaction.recipient.bank && (
        <p><strong>Bank:</strong> {transaction.recipient.bank}</p>
      )}
      {transaction.recipient.account && (
        <p><strong>Account Number:</strong> {transaction.recipient.account}</p>
      )}
      {/* If you want to show card details (be mindful of PCI compliance!) */}
      {/* <p><strong>Card Number:</strong> {transaction.cardDetails?.cardNumber}</p> */}
      {/* ... etc. */}
    </div>
  );
}

export default TransactionDetail;
