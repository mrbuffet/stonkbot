import { DataUtils } from './modules/helpers/utils/DataUtils.js';
import { logger } from './modules/helpers/logger/logger.js';

const symbol = 'AAPL';
const data = await DataUtils.fetchStockData(symbol);
logger.info(`Data for ${symbol}: ${data}`);

const price = await DataUtils.getLiveStockPrice(symbol);
logger.info(`Price for ${symbol}: ${price}`);

const priceChange = await DataUtils.getLiveStockPriceChange(symbol);
logger.info(`Price change for ${symbol}: ${priceChange}`);
