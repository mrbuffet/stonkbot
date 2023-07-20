import yahooFinance from '../../../../node_modules/yahoo-finance2/dist/esm/src/index-node.js';
import { logger } from '../logger/logger.js';

export class DataUtils {
    public static async fetchStockData(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);
            return JSON.stringify(data);
        } catch (error) {
            logger.error(error);
        }
    }

    public static async getLiveStockPrice(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);

            const price = data?.price?.regularMarketPrice;

            if (price !== undefined) {
                return price;
            } else {
                throw new Error('Regular market price is not available.');
            }
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    public static async getLiveStockPriceChange(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);

            const priceChange = data?.price?.regularMarketChange;

            if (priceChange !== undefined) {
                return priceChange;
            } else {
                throw new Error('Regular market price change is not available.');
            }
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
}
