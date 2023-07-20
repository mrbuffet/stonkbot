import yahooFinance from '../../../../node_modules/yahoo-finance2/dist/esm/src/index-node';
import { logger } from '../logger/logger';

export class DataUtils {
    public static async fetchStockData(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);
            logger.info(data);
        } catch (error) {
            logger.error(error);
        }
    }
}
