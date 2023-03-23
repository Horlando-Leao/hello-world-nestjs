import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port_app } from './globals/enviroments';

async function bootstrap() {
  console.log(`Running nestjs port ${port_app}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(port_app);
}
bootstrap();
