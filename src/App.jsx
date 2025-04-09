import { Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import HomePage from './pages/HomePage';
import SendMoney from './pages/SendMoney';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import ExchangeRates from './pages/ExchangeRates';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/exchange-rates" element={<ExchangeRates />} />
    </Routes>
  );
}

export default App;
