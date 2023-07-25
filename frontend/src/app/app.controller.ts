import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  serveReactApp(@Res() res: Response): void {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  }
}
