import { Injectable } from '@nestjs/common';

@Injectable()//Permite comportarse como un componente compartido
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
