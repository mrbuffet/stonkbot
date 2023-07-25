import { Injectable, Logger } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class DataUtilsService {
  private readonly logger = new Logger(DataUtilsService.name);

  public async fetchStockData(symbol: string) {
    try {
      const data = await yahooFinance.quoteSummary(symbol);
      return JSON.stringify(data);
    } catch (error) {
      this.logger.error(error);
    }
  }

  public async getLiveStockPrice(symbol: string) {
    try {
      const data = await yahooFinance.quoteSummary(symbol);

      const price = data?.price?.regularMarketPrice;

      if (price !== undefined) {
        return price;
      } else {
        throw new Error('Regular market price is not available.');
      }
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async getLiveStockPriceChange(symbol: string) {
    try {
      const data = await yahooFinance.quoteSummary(symbol);

      const priceChange = data?.price?.regularMarketChange;

      if (priceChange !== undefined) {
        return priceChange;
      } else {
        throw new Error('Regular market price change is not available.');
      }
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
  public async getTrailingPE(symbol: string) {
    try {
      const data = await yahooFinance.quoteSummary(symbol);

      const trailingPE = data?.summaryDetail?.trailingPE;

      if (trailingPE !== undefined) {
        return trailingPE;
      } else {
        this.logger.error('Trailing PE is not available.');
      }
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async getForwardPE(symbol: string) {
    try {
      const data = await yahooFinance.quoteSummary(symbol);

      const forwardPE = data?.summaryDetail?.forwardPE;

      if (forwardPE !== undefined) {
        return forwardPE;
      } else {
        this.logger.error('Forward PE is not available.');
      }
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
