// start.ts
import { logger } from './modules/helpers/logger/logger.js';
import { dataUtils, rulesUtils } from './modules/helpers/idexUtils.js';
import './src/server'; // Import the backend server code

const symbol = 'GOOG';
const data = await dataUtils.fetchStockData(symbol);
logger.info(`Data for ${symbol}: ${JSON.stringify(data)}`);

const price = await dataUtils.getLiveStockPrice(symbol);
logger.info(`Price for ${symbol}: ${price}`);

const priceChange = await dataUtils.getLiveStockPriceChange(symbol);
logger.info(`Price change for ${symbol}: ${priceChange}`);

const rule1 = await rulesUtils.trailingVsForwardPeRule(symbol);
logger.info(`Rule 1 for ${symbol}: ${rule1}`);
