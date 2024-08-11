// designing custom hook

import { useState, useEffect } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`);
        const data = await response.json();
        setCurrencyInfo(data[baseCurrency]);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return currencyInfo;
}


export default useCurrencyInfo;

// api calls give string format so we need to convert it