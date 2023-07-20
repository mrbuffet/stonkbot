import { DataUtils } from "./modules/helpers/utils/DataUtils.js";
import { logger } from "./modules/helpers/logger/logger.js";

const data = DataUtils.fetchStockData('AAPL');
logger.info(data);