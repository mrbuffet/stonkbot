import { Controller, Post, Logger, Body } from '@nestjs/common';
import { RuleUtilsService } from './ruleUtils.service';

@Controller('rule')
export class RuleUtilsController {
  constructor(private readonly ruleUtilsService: RuleUtilsService) {}

  private readonly logger = new Logger(RuleUtilsController.name);

  @Post('run')
  async run(@Body() requestBody: { symbol: string }): Promise<any> {
    const { symbol } = requestBody;

    if (!symbol) {
      return { error: 'Symbol parameter is missing.' };
    }

    const rule1 = await this.ruleUtilsService.trailingVsForwardPeRule(symbol);
    this.logger.log(`Rule 1 for ${symbol}: ${rule1}`);
    return rule1;
  }
}
