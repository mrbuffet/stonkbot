import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GetStockUtilsModule } from './modules/getStocksUtils/getStockUtils.module';
import { DataUtilsModule } from './modules/dataUtils/dataUtils.module';
import { RuleUtilsModule } from './modules/rulesUtils/ruleUtils.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DataUtilsModule,
    RuleUtilsModule,
    GetStockUtilsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
