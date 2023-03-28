import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import configuration from './globals/enviroments';

async function bootstrap() {
  console.log(`Running nestjs port ${configuration().port}`);
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Hello World Nestjs')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configuration().port);
}
bootstrap();
