// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Layout from "./components/Layout";

// Protected pages
import HomePage from "./pages/HomePage";
import SendMoney from "./pages/SendMoney";
import Transactions from "./pages/Transactions";
import ExchangeRates from "./pages/ExchangeRates";
import Profile from "./pages/Profile";
import TransactionDetail from "./pages/TransactionDetail";

function App() {
  return (
    <Routes>
      {/* Public route: login */}
      <Route path="/" element={<LoginScreen />} />

      {/* Protected pages wrapped in Layout */}
      <Route path="/app" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="send-money" element={<SendMoney />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="transactions/:id" element={<TransactionDetail />} />
        <Route path="exchange-rates" element={<ExchangeRates />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
