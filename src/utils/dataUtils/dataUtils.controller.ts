import { Controller, Post, Logger } from '@nestjs/common';
import { DataUtilsService } from './dataUtils.service';

@Controller('/data')
export class DataUtilsController {
  constructor(private readonly dataUtils: DataUtilsService) {}
  private readonly logger = new Logger(DataUtilsService.name);

  @Post('/run')
  async run(): Promise<any> {
    const symbol = 'GOOG';
    const data = await this.dataUtils.fetchStockData(symbol);
    this.logger.log(`Data for ${symbol}: ${data}`);

    const price = await this.dataUtils.getLiveStockPrice(symbol);
    this.logger.log(`Price for ${symbol}: ${price}`);

    const priceChange = await this.dataUtils.getLiveStockPriceChange(symbol);
    this.logger.log(`Price change for ${symbol}: ${priceChange}`);

    return { data, price, priceChange };
  }
}