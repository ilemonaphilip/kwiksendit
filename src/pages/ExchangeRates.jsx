import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

function ExchangeRates() {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  // Your API key and endpoint URL
  const apiKey = "75050485272a320c83c32eb4";
  // Example endpoint fetching latest rates for USD.
  const endpoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Exchange rate data:", data);
        // For example, let's get the NGN conversion rate.
        if (data && data.conversion_rates && data.conversion_rates.NGN) {
          setRate(`1 USD = ${data.conversion_rates.NGN} NGN`);
        } else {
          setRate("Conversion rate not available");
        }
      })
      .catch((err) => {
        console.error("Error fetching exchange rate:", err);
        setError("Failed to fetch exchange rates");
      });
  }, [endpoint]);

  return (
    <div>
      <Header />
      <div className="container" style={{ padding: "20px" }}>
        <h2 className="page-header">Exchange Rates</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p>{rate ? rate : "Loading exchange rate..."}</p>
        )}
      </div>
    </div>
  );
}

export default ExchangeRates;
