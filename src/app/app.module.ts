import { Module } from '@nestjs/common';
import { DataUtilsModule } from '../utils/dataUtils/dataUtils.module';
import { RuleUtilsModule } from '../utils/rulesUtils/ruleUtils.module';

@Module({
  imports: [DataUtilsModule, RuleUtilsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
