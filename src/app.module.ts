import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    UserModule,
  ],
  controllers: [HelloController],
  providers: [HelloService],
  exports: [],
})
export class AppModule {}
