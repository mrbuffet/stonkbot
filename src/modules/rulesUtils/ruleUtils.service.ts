import { Injectable, Logger } from '@nestjs/common';
import { DataUtilsService } from '../dataUtils/dataUtils.service';
import { QuoteSummaryResult } from 'yahoo-finance2/dist/esm/src/modules/quoteSummary-iface';

@Injectable()
export class RuleUtilsService {
  constructor(private readonly DataUtilsService: DataUtilsService) {}

  private readonly logger = new Logger(RuleUtilsService.name);

  public async trailingVsForwardPeRule(stockData: QuoteSummaryResult) {
    if (
      !this.DataUtilsService.getForwardPE ||
      !this.DataUtilsService.getTrailingPE
    ) {
      this.logger.log('PE Rule Failed');
      return false;
    }
    this.logger.log('Starting PE Rule');
    if (
      (await this.DataUtilsService.getForwardPE) <
      (await this.DataUtilsService.getTrailingPE)
    ) {
      this.logger.log('PE Rule Passed');
      return true;
    } else {
      this.logger.log('PE Rule Failed');
      return false;
    }
  }

  public async priceChangeRule(stockData: QuoteSummaryResult) {
    if ((await this.DataUtilsService.getLiveStockPriceChange) > 0) {
      this.logger.log('Price Change Rule Passed');
      return true;
    } else {
      this.logger.log('Price Change Rule Failed');
      return false;
    }
  }
}
