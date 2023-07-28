import { Module } from '@nestjs/common';
import { StocksService } from './stockUtils.service';
import { StocksController } from './stockUtils.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule], // We import the HttpModule so we can use it in our service.
  providers: [StocksService], // The StocksService is made available for injection across the module.
  controllers: [StocksController], // The StocksController defines the routes for this module.
})
export class GetStockUtilsModule {}
