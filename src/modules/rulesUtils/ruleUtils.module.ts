import { Module } from '@nestjs/common';
import { RuleUtilsController } from './ruleUtils.controller';
import { RuleUtilsService } from './ruleUtils.service';
// import { DataUtilsModule } from '../dataUtils/dataUtils.module';
import { DataUtilsService } from '../dataUtils/dataUtils.service';

@Module({
  imports: [],
  controllers: [RuleUtilsController],
  providers: [RuleUtilsService, DataUtilsService],
})
export class RuleUtilsModule {}
