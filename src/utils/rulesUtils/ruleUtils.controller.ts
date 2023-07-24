import { Controller, Post, Logger } from '@nestjs/common';
import { RuleUtilsService } from './ruleUtils.service';

@Controller('rule')
export class RuleUtilsController {
  constructor(private readonly ruleUtilsService: RuleUtilsService) {}

  private readonly logger = new Logger(RuleUtilsController.name);
  private readonly symbol = 'GOOG';

  @Post('run')
  async run(): Promise<any> {
    const rule1 = await this.ruleUtilsService.trailingVsForwardPeRule(
      this.symbol,
    );
    this.logger.log(`Rule 1 for ${this.symbol}: ${rule1}`);
    return rule1;
  }
}
