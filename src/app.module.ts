import { Module } from '@nestjs/common';
import { GetStockUtilsModule } from './modules/stocksUtils/stockUtils.module';
import { DataUtilsModule } from './modules/dataUtils/dataUtils.module';
import { RuleUtilsModule } from './modules/rulesUtils/ruleUtils.module';

@Module({
  imports: [DataUtilsModule, RuleUtilsModule, GetStockUtilsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
