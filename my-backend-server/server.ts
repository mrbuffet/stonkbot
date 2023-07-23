import express from 'express';
import cors from 'cors';
import { checkRule1, fetchData, fetchPrice, fetchPriceChange } from '../src/api.js';

const app = express();
const port = 8080; // Choose any available port number

// Middleware
app.use(cors());

// API endpoints
app.get('/api/fetchStockData', async (req, res) => {
  const symbol = req.query.symbol as string; // Typecast to string
  const data = await fetchData(symbol);
  res.json(data);
});

app.get('/api/getLiveStockPrice', async (req, res) => {
  const symbol = req.query.symbol as string; // Typecast to string
  const price = await fetchPrice(symbol);
  res.json(price);
});

app.get('/api/getLiveStockPriceChange', async (req, res) => {
  const symbol = req.query.symbol as string; // Typecast to string
  const priceChange = await fetchPriceChange(symbol);
  res.json(priceChange);
});

app.get('/api/trailingVsForwardPeRule', async (req, res) => {
  const symbol = req.query.symbol as string; // Typecast to string
  const rule1 = await checkRule1(symbol);
  res.json(rule1);
});

// Start the server
app.listen(Number(port), () => {
  console.log(`Server is running on port ${port}`);
});
