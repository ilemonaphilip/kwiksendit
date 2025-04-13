// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SendMoney from "./pages/SendMoney";
import Transactions from "./pages/Transactions";
import TransactionDetail from "./pages/TransactionDetail";
import ExchangeRates from "./pages/ExchangeRates";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="send-money" element={<SendMoney />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="transactions/:id" element={<TransactionDetail />} />
        <Route path="exchange-rates" element={<ExchangeRates />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
