import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CepModule } from './cep/cep.module';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { UserModule } from './user/user.module';
import configuration from './globals/enviroments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      load: [configuration],
    }),
    UserModule,
    CepModule,
  ],
  controllers: [HelloController],
  providers: [HelloService],
  exports: [],
})
export class AppModule {}
