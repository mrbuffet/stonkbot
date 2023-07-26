import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DataUtilsModule } from './modules/dataUtils/dataUtils.module';
import { RuleUtilsModule } from './modules/rulesUtils/ruleUtils.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config/.develop.env',
      isGlobal: true,
    }),
    DataUtilsModule,
    RuleUtilsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
