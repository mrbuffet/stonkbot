import { dataUtils, rulesUtils } from './modules/helpers/index.js';
import { logger } from './modules/helpers/logger/logger.js';

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

const peRule = await rulesUtils.trailingVsForwardPeRule(symbol);
logger.info(`PE Rule for ${symbol}: ${peRule}`);
