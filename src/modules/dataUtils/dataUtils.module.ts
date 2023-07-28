import { Module } from '@nestjs/common';
import { DataUtilsService } from './dataUtils.service';
import { DataUtilsController } from './dataUtils.controller';

@Module({
  imports: [],
  controllers: [DataUtilsController],
  providers: [DataUtilsService],
})
export class DataUtilsModule {}
