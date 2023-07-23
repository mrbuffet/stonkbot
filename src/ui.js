// ui/ui.js
import { fetchData, fetchPrice, fetchPriceChange, checkRule1 } from './api.js';
document.getElementById('stockForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const symbolInput = document.getElementById('symbolInput');
  if (!symbolInput) {
    console.error('Symbol input element not found.');
    return;
  }
  const symbol = symbolInput.value;

  // Fetch stock data and display the results
  const data = await fetchData(symbol);
  const price = await fetchPrice(symbol);
  const priceChange = await fetchPriceChange(symbol);
  const rule1 = await checkRule1(symbol);

  const resultContainer = document.getElementById('resultContainer');
  if (!resultContainer) {
    console.error('Result container element not found.');
    return;
  }
  resultContainer.innerHTML = `
    <h2>Stock: ${symbol}</h2>
    <p>Data: ${JSON.stringify(data)}</p>
    <p>Price: ${price}</p>
    <p>Price Change: ${priceChange}</p>
    <p>Rule 1: ${rule1}</p>
  `;
});
