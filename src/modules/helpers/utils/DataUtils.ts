import yahooFinance from '../../../../node_modules/yahoo-finance2/dist/esm/src/index-node.js';
import { logger } from '../logger/logger.js';

export class DataUtils {
    async fetchStockData(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);
            return JSON.stringify(data);
        } catch (error) {
            logger.error(error);
        }
    }

    async getLiveStockPrice(symbol: string) {
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

    async getLiveStockPriceChange(symbol: string) {
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
    async getTrailingPE(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);

            const trailingPE = data?.summaryDetail?.trailingPE;

            if (trailingPE !== undefined) {
                return trailingPE;
            } else {
                throw new Error('Trailing PE is not available.');
            }
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async getForwardPE(symbol: string) {
        try {
            const data = await yahooFinance.quoteSummary(symbol);

            const forwardPE = data?.summaryDetail?.forwardPE;

            if (forwardPE !== undefined) {
                return forwardPE;
            } else {
                throw new Error('Forward PE is not available.');
            }
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
}
