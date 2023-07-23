import { logger } from './modules/helpers/logger/logger.js';
import { dataUtils, rulesUtils } from './modules/helpers/idexUtils.js'

// API Function to fetch stock data
export async function fetchData(symbol: string) {
  try {
    return await dataUtils.fetchStockData(symbol);
  } catch (error) {
    logger.error('Error fetching stock data:', error);
    return null;
  }
}

// API Function to fetch live stock price
export async function fetchPrice(symbol: string) {
  try {
    return dataUtils.getLiveStockPrice(symbol);
  } catch (error) {
    logger.error('Error fetching live stock price:', error);
    return null;
  }
}

// API Function to fetch live stock price change
export async function fetchPriceChange(symbol: string) {
  try {
    return dataUtils.getLiveStockPriceChange(symbol);
  } catch (error) {
    logger.error('Error fetching live stock price change:', error);
    return null;
  }
}

// API Function to check Rule 1
export async function checkRule1(symbol: string) {
  try {
    return await rulesUtils.trailingVsForwardPeRule(symbol);
  } catch (error) {
    logger.error('Error checking Rule 1:', error);
    return false;
  }
}