import { Injectable, Logger } from '@nestjs/common';
import { DataUtilsService } from '../dataUtils/dataUtils.service';

@Injectable()
export class RuleUtilsService {
  constructor(private readonly DataUtilsService: DataUtilsService) {}

  private readonly logger = new Logger(RuleUtilsService.name);

  public async trailingVsForwardPeRule(symbol: string) {
    if (
      (await this.DataUtilsService.getForwardPE(symbol)) === undefined ||
      (await this.DataUtilsService.getTrailingPE(symbol)) === undefined
    ) {
      this.logger.log('PE Rule Failed');
      return false;
    }
    this.logger.log('Starting PE Rule');
    if (
      (await this.DataUtilsService.getForwardPE(symbol)) <
      (await this.DataUtilsService.getTrailingPE(symbol))
    ) {
      this.logger.log('PE Rule Passed');
      return true;
    } else {
      this.logger.log('PE Rule Failed');
      return false;
    }
  }

  public async priceChangeRule(symbol: string) {
    if ((await this.DataUtilsService.getLiveStockPriceChange(symbol)) > 0) {
      this.logger.log('Price Change Rule Passed');
      return true;
    } else {
      this.logger.log('Price Change Rule Failed');
      return false;
    }
  }
}
