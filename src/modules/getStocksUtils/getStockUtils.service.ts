import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StocksService {
  private readonly BASE_URL = 'https://www.alphavantage.co/query';
  async getSP500List(apiKey: string): Promise<any> {
    const params = {
      function: 'LISTING_STATUS',
      apikey: process.env.API_KEY,
      datatype: 'json',
    };
    console.log('params: ', process.env.API_KEY);
    try {
      const response = await axios.get(this.BASE_URL, { params });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}
