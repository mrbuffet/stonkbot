import { DataUtils } from './modules/helpers/utils/DataUtils.js';
import { logger } from './modules/helpers/logger/logger.js';
import { RulesUtils } from './modules/helpers/utils/RulesUtils.js';
import { dataUtils, rulesUtils } from './modules/helpers/idexUtils.js';

const symbol = 'AAPL';
const data = await dataUtils.fetchStockData(symbol);
logger.info(`Data for ${symbol}: ${data}`);

const price = await dataUtils.getLiveStockPrice(symbol);
logger.info(`Price for ${symbol}: ${price}`);

const priceChange = await dataUtils.getLiveStockPriceChange(symbol);
logger.info(`Price change for ${symbol}: ${priceChange}`);

const rule1 = await rulesUtils.trailingVsForwardPeRule(symbol);
logger.info(`Rule 1 for ${symbol}: ${rule1}`);
