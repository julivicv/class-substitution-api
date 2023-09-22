import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async postHello(id: number) : Promise<string> {
    return "Blá Blá";
  }
}
