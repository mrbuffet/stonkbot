import { Module } from '@nestjs/common';
import { DataUtilsController } from './dataUtils.controller';
import { DataUtilsService } from './dataUtils.service';

@Module({
  imports: [],
  controllers: [DataUtilsController],
  providers: [DataUtilsService],
})
export class DataUtilsModule {}
