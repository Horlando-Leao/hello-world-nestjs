import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('api/v1/test')
export class HelloController {
  constructor(private readonly appService: HelloService) {}

  @Get('hello')
  getHello(): object {
    return this.appService.getHello();
  }
}
