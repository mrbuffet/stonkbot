import { dataUtils } from '..';
import { logger } from '../logger/logger';

export class RulesUtils {
    async trailingVsForwardPeRule(symbol: string) {
        logger.info('Starting PE Rule');
        if ((await dataUtils.getForwardPE(symbol)) < (await dataUtils.getTrailingPE(symbol))) {
            logger.info('PE Rule Passed');
            return true;
        }
    }
}
