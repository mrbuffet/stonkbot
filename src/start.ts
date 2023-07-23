import { logger } from './modules/helpers/logger/logger.js';
import { dataUtils } from './modules/helpers/index.js';

const symbol = 'AAPL';
const data = await dataUtils.fetchStockData(symbol);
logger.info(`Data for ${symbol}: ${data}`);

const price = await dataUtils.getLiveStockPrice(symbol);
logger.info(`Price for ${symbol}: ${price}`);

const priceChange = await dataUtils.getLiveStockPriceChange(symbol);
logger.info(`Price change for ${symbol}: ${priceChange}`);

const trailingPE = await dataUtils.getTrailingPE(symbol);
logger.info(`Trailing PE for ${symbol}: ${trailingPE}`);

const forwardPE = await dataUtils.getForwardPE(symbol);
logger.info(`Forward PE for ${symbol}: ${forwardPE}`);
