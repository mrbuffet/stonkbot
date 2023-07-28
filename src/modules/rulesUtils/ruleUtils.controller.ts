import { Controller, Post, Logger, Body } from '@nestjs/common';
import { RuleUtilsService } from './ruleUtils.service';
import { DataUtilsService } from '../dataUtils/dataUtils.service';

@Controller('rule')
export class RuleUtilsController {
  constructor(
    private readonly ruleUtilsService: RuleUtilsService,
    private readonly dataUtilsService: DataUtilsService,
  ) {}

  private readonly logger = new Logger(RuleUtilsController.name);

  @Post('run')
  async run(@Body() requestBody: { symbol: string }): Promise<any> {
    const { symbol } = requestBody;

    const data = await this.dataUtilsService.fetchStockData(symbol);
    this.logger.log(`Data for ${symbol}: ${data}`);

    const rule1 = await this.ruleUtilsService.trailingVsForwardPeRule(data);
    this.logger.log(`Rule 1 for ${symbol}: ${rule1}`);
    return { rule1 };
  }
}
