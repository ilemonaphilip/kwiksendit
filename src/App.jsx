import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SendMoney from './pages/SendMoney';
import Transactions from './pages/Transactions';
import ExchangeRates from './pages/ExchangeRates';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      {/* Matches /kwiksendit/ */}
      <Route path="/" element={<HomePage />} />
      {/* Matches /kwiksendit/send-money */}
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/exchange-rates" element={<ExchangeRates />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
