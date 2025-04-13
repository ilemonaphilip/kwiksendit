import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

function ExchangeRates() {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Real API key and endpoint
  const apiKey = "75050485272a320c83c32eb4";
  const endpoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  const fetchRate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      console.log("Exchange rate data:", data);
      if (data && data.conversion_rates && data.conversion_rates.NGN) {
        setRate(`1 USD = ${data.conversion_rates.NGN} NGN`);
      } else {
        setRate("Conversion rate not available");
      }
    } catch (err) {
      console.error("Error fetching exchange rate:", err);
      setError("Failed to fetch exchange rates");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRate();
  }, []);

  return (
    <div>
      <Header />
      <BackButton />
      <div className="container" style={{ padding: "20px" }}>
        <h2 className="page-header">Exchange Rates</h2>
        {loading && <p>Loading exchange rate...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {rate && !loading && <p>{rate}</p>}
        <button onClick={fetchRate} className="submit-button">
          Refresh Rate
        </button>
      </div>
    </div>
  );
}

export default ExchangeRates;
