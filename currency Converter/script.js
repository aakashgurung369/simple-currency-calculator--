const conversionRates = {
    USD: {
      EUR: 0.91,
      GBP: 0.81,
      JPY: 134.23,
      NPR: 131.16
    },
    EUR: {
      USD: 1.09,
      GBP: 0.88,
      JPY: 146.9,
      NPR: 143.5
    },
    GBP: {
      USD: 1.24,
      EUR: 1.13,
      JPY: 166.56,
      NPR: 162.68
    },
    JPY: {
      USD: 0.0074,
      EUR: 0.0068,
      GBP: 0.0060,
      NPR: 0.98
    },
    NPR: {
      USD: 0.0076,
      EUR: 0.0070,
      GBP: 0.0061,
      JPY: 1.02
    }
  };
  
  // DOM elements
  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const convertBtn = document.getElementById("convertBtn");
  const convertedAmount = document.getElementById("convertedAmount");
  
  // Add event listener to convert button
  convertBtn.addEventListener("click", () => {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
  
    // Perform currency conversion
    const converted = amount * conversionRates[fromCurrency][toCurrency];
  
    // Display converted amount
    convertedAmount.textContent = converted.toFixed(2) + " " + toCurrency;
  });
  