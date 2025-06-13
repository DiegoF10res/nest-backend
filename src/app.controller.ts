import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//Recurso principal, raiz de l apalicacion 
//Decoradores para definir el controlador
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()//Decorador para comportarse como GET
  getHello(): string {//Accion, index de la aplicacion
    return this.appService.getHello();
  }
}
