import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { appConfig } from './infrastructure';
import { GlobalHTTPFilter } from './base/filters';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors(appConfig.corsOptions);
  app.useGlobalFilters(new GlobalHTTPFilter());

  await app.listen(appConfig.port);
}

bootstrap();
