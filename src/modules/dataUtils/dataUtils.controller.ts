import {
  Controller,
  Post,
  Logger,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DataUtilsService } from './dataUtils.service';

@Controller('/check')
export class DataUtilsController {
  constructor(private readonly dataUtilsService: DataUtilsService) {}
  private readonly logger = new Logger(DataUtilsService.name);

  @Post()
  async run(@Body() requestBody: { symbol: string }): Promise<any> {
    const { symbol } = requestBody;

    const data = await this.dataUtilsService.fetchStockData(symbol);
    this.logger.log(`Data for ${symbol}: ${data}`);

    const price = await this.dataUtilsService.getLiveStockPrice;
    this.logger.log(`Price for ${symbol}: ${price}`);

    const priceChange = await this.dataUtilsService.getLiveStockPriceChange;
    this.logger.log(`Price change for ${symbol}: ${priceChange}`);

    return { data, price, priceChange };
  }
}
