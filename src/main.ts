import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Create the Express app and pass it to NestJS
  const expressApp = express();

  // Serve the React app's build files from the correct path
  expressApp.use(express.static(join(__dirname, '..', 'frontend', 'build')));

  // Define a route to handle the search request
  expressApp.get('/api/search', (req: Request, res: Response) => {
    const { query } = req.query;
    res.json({ query });
  });

  // All other routes should serve the React app's index.html
  expressApp.get('*', (_req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'frontend', 'build', 'index.html'));
  });

  // Use the Express app in NestJS
  app.use(expressApp);

  await app.listen(3000);
}
bootstrap();
