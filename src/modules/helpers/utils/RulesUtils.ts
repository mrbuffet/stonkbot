import { dataUtils } from '../idexUtils.js';
import { logger } from '../logger/logger.js';

export class RulesUtils {
    public async trailingVsForwardPeRule(symbol: string) {
        if (
            (await dataUtils.getForwardPE(symbol)) === undefined ||
            (await dataUtils.getTrailingPE(symbol)) === undefined
        ) {
            logger.info('PE Rule Failed');
            return false;
        }
        logger.info('Starting PE Rule');
        if ((await dataUtils.getForwardPE(symbol)) < (await dataUtils.getTrailingPE(symbol))) {
            logger.info('PE Rule Passed');
            return true;
        } else {
            logger.info('PE Rule Failed');
            return false;
        }
    }

    public async priceChangeRule(symbol: string) {
        if ((await dataUtils.getLiveStockPriceChange(symbol)) > 0) {
            logger.info('Price Change Rule Passed');
            return true;
        } else {
            logger.info('Price Change Rule Failed');
            return false;
        }
    }
}
