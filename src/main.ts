import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './globals/enviroments';

async function bootstrap() {
  console.log(`Running nestjs port ${configuration().port}`);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configuration().port);
}
bootstrap();
