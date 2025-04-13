// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TransactionProvider } from "./contexts/TransactionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/kwiksendit">
      {/* Provide the transaction context to the entire app */}
      <TransactionProvider>
        <App />
      </TransactionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
