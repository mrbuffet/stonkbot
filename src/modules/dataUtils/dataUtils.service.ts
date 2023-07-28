import { Injectable, Logger } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { QuoteSummaryResult } from 'yahoo-finance2/dist/esm/src/modules/quoteSummary-iface';

@Injectable()
export class DataUtilsService {
  private readonly logger = new Logger(DataUtilsService.name);
  public stockData: QuoteSummaryResult;
  public async fetchStockData(symbol: string): Promise<QuoteSummaryResult> {
    try {
      this.stockData = await yahooFinance.quoteSummary(symbol);
      return this.stockData;
    } catch (error) {
      this.logger.error(error);
    }
  }
  get getLiveStockPrice() {
    return this.stockData.price.regularMarketPrice;
  }
  get getLiveStockPriceChange() {
    return this.stockData.price.regularMarketChange;
  }

  get getTrailingPE() {
    return this.stockData.summaryDetail.trailingPE;
  }

  get getForwardPE() {
    return this.stockData.summaryDetail.forwardPE;
  }
}
