import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import { useTransactionContext } from "../contexts/TransactionContext";
import { initiateAdvancedPayment, pollTransactionStatus } from "../services/advancedSettlementService";

function SendMoney() {
  const { addTransaction } = useTransactionContext();

  // Form fields for recipient and payment info:
  const [recipientName, setRecipientName] = useState("");
  const [recipientBank, setRecipientBank] = useState("");
  const [recipientAccount, setRecipientAccount] = useState("");
  
  const [userCurrency, setUserCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  // Card details (for demonstration only—do not store sensitive data on the client)
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  // Exchange rates state
  const [rates, setRates] = useState({});
  const [fetchingRates, setFetchingRates] = useState(false);

  // Payment processing state
  const [paymentStatus, setPaymentStatus] = useState("idle"); // idle, initiating, processing, settled, failed
  const [message, setMessage] = useState("");

  // Exchange Rates API details
  const EXCHANGE_API_KEY = "75050485272a320c83c32eb4";
  const EXCHANGE_ENDPOINT = `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest`;

  // Fetch exchange rates on mount (we use USD as base)
  useEffect(() => {
    async function fetchRates() {
      setFetchingRates(true);
      try {
        const res = await fetch(`${EXCHANGE_ENDPOINT}/USD`);
        if (!res.ok) throw new Error("Failed to fetch exchange rates");
        const data = await res.json();
        setRates(data.conversion_rates || {});
      } catch (error) {
        console.error("Exchange rates error:", error);
      }
      setFetchingRates(false);
    }
    fetchRates();
  }, []);

  // Recalculate converted amount (to NGN) whenever amount, userCurrency, or rates change.
  useEffect(() => {
    if (!rates[userCurrency] || !amount) {
      setConvertedAmount("");
      return;
    }
    try {
      // Assume rates contains NGN (e.g., 1 USD = X NGN) even when base is USD.
      const rateUSDToNGN = rates["NGN"];
      const rateUserToUSD = userCurrency === "USD" ? 1 : 1 / rates[userCurrency];
      const amountInUSD = parseFloat(amount) * rateUserToUSD;
      const amountInNGN = amountInUSD * rateUSDToNGN;
      setConvertedAmount(amountInNGN.toFixed(2));
    } catch (error) {
      console.error("Conversion error:", error);
      setConvertedAmount("");
    }
  }, [amount, userCurrency, rates]);

  // Handle form submission for advanced payment/settlement flow
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    
    // Basic validations (expand as needed)
    if (!recipientName.trim() || !recipientBank.trim() || !recipientAccount.trim()) {
      return setMessage("Please complete recipient details.");
    }
    if (!cardNumber.trim() || !cardExpiry.trim() || !cardCVC.trim()) {
      return setMessage("Please fill in all card details.");
    }
    if (!amount || parseFloat(amount) <= 0) {
      return setMessage("Enter a valid amount.");
    }

    try {
      setPaymentStatus("initiating");
      // Prepare a paymentData object
      const paymentData = {
        recipient: {
          name: recipientName.trim(),
          bank: recipientBank.trim(),
          account: recipientAccount.trim(),
        },
        userCurrency,
        amount: parseFloat(amount),
        convertedAmountInNGN: convertedAmount,
        cardDetails: {
          cardNumber: cardNumber.trim(),
          cardExpiry: cardExpiry.trim(),
          cardCVC: cardCVC.trim(),
        },
        date: new Date().toISOString().slice(0, 10), // Format: YYYY-MM-DD
        stage: "pending",
      };

      // Call a simulated advanced payment initiation function
      const result = await initiateAdvancedPayment(paymentData);
      if (result.success) {
        paymentData.id = result.transactionId; // e.g., TXN-<timestamp>
        paymentData.stage = "processing";
        
        // Add the new transaction to the global context
        addTransaction(paymentData);
        setMessage("Payment initiated. Transaction ID: " + paymentData.id);
        setPaymentStatus("processing");

        // Poll for settlement status every 3 seconds
        const intervalId = setInterval(async () => {
          try {
            const statusData = await pollTransactionStatus(paymentData.id);
            if (statusData.status === "settled") {
              paymentData.stage = "settled";
              setMessage("Payment settled! Transaction ID: " + paymentData.id);
              clearInterval(intervalId);
              setPaymentStatus("settled");
            } else if (statusData.status === "failed") {
              paymentData.stage = "failed";
              setMessage("Payment failed for Transaction ID: " + paymentData.id);
              clearInterval(intervalId);
              setPaymentStatus("failed");
            } else {
              setMessage("Transaction processing...");
            }
          } catch (pollErr) {
            console.error("Polling error:", pollErr);
            setMessage("Error checking transaction status.");
            clearInterval(intervalId);
            setPaymentStatus("failed");
          }
        }, 3000);
      } else {
        setPaymentStatus("failed");
        setMessage("Payment initiation failed.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus("failed");
      setMessage(error.message || "Payment failed.");
    }
  };

  return (
    <div className="page-content">
      <BackButton />
      <h2>Send Money</h2>
      {fetchingRates && <p>Loading exchange rates...</p>}
      <form onSubmit={handleSubmit} className="form">
        {/* Recipient Details */}
        <label>
          Recipient Name:
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="e.g., John Doe"
            required
          />
        </label>
        <label>
          Recipient Bank:
          <input
            type="text"
            value={recipientBank}
            onChange={(e) => setRecipientBank(e.target.value)}
            placeholder="e.g., Zenith Bank"
            required
          />
        </label>
        <label>
          Recipient Account Number:
          <input
            type="text"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            placeholder="Account number"
            required
          />
        </label>

        {/* Payment Amount & Currency */}
        <label>
          Your Currency:
          <select
            value={userCurrency}
            onChange={(e) => setUserCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label>
          Amount in {userCurrency}:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </label>
        {convertedAmount && userCurrency !== "NGN" && (
          <p style={{ fontSize: "14px", color: "#666" }}>
            Approx. {convertedAmount} NGN
          </p>
        )}

        {/* Card Details */}
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="XXXX XXXX XXXX XXXX"
            required
          />
        </label>
        <label>
          Expiry (MM/YY):
          <input
            type="text"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </label>
        <label>
          CVC:
          <input
            type="text"
            value={cardCVC}
            onChange={(e) => setCardCVC(e.target.value)}
            placeholder="3 or 4 digits"
            required
          />
        </label>

        {message && (
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: paymentStatus === "failed" ? "#dc3545" : "#28a745"
            }}
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          className="submit-button"
          disabled={
            paymentStatus === "processing" || paymentStatus === "initiating"
          }
        >
          {paymentStatus === "processing" || paymentStatus === "initiating"
            ? "Processing..."
            : "Send Money"}
        </button>
      </form>
    </div>
  );
}

export default SendMoney;
