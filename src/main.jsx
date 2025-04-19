// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { TransactionProvider } from './contexts/TransactionContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <TransactionProvider>
      <BrowserRouter basename="/kwiksendit">
        <App />
      </BrowserRouter>
    </TransactionProvider>
  </AuthProvider>
)
