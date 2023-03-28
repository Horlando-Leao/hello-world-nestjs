import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelloService } from './hello.service';

@ApiTags('hello')
@Controller('api/v1/test')
export class HelloController {
  constructor(private readonly appService: HelloService) {}

  @Get('hello')
  getHello(): object {
    return this.appService.getHello();
  }
}
