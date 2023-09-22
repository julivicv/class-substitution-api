import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async postHello(@Body() createdrequest: {name: string, age: number}): Promise<string> {
    return await this.appService.postHello(1);
  }
  
  

}
