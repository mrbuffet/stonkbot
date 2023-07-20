import { DataUtils } from "./modules/helpers/utils/DataUtils";
import { logger } from "./modules/helpers/logger/logger";



const data = DataUtils.fetchStockData('AAPL');
logger.info(data);