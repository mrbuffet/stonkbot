import { Controller, Get, Query } from '@nestjs/common';
import { StocksService } from './getStockUtils.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('stocklist')
  async getSP500List(@Query('apiKey') apiKey: string): Promise<any> {
    return this.stocksService.getAllStocks(apiKey);
  }
}
