import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class StocksService {
  constructor(private readonly httpService: HttpService) {}
  private readonly BASE_URL = 'https://www.alphavantage.co/query';
  private readonly logger = new Logger(StocksService.name);

  async getAllStocks(apiKey: string): Promise<any> {
    const params = {
      function: 'LISTING_STATUS',
      apikey: process.env.API_KEY,
      datatype: 'json',
    };
    const { data } = await firstValueFrom(
      this.httpService.get<any>(this.BASE_URL, { params }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new Error(
            `Error fetching data: ${error.message} apiKey:${apiKey}`,
          );
        }),
      ),
    );
    return data;
  }
}
