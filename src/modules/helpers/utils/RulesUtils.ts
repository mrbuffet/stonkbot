import { dataUtils } from '../idexUtils.js';
import { logger } from '../logger/logger.js';

export class RulesUtils {
    public async trailingVsForwardPeRule(symbol: string) {
        logger.info('Starting PE Rule');
        if ((await dataUtils.getForwardPE(symbol)) < (await dataUtils.getTrailingPE(symbol))) {
            logger.info('PE Rule Passed');
            return true;
        } else {
            logger.info('PE Rule Failed');
            return false;
        }
    }
}
