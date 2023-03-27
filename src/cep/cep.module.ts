import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';
import { CepDTO } from './dto/cep.factory';

@Module({
  controllers: [CepController],
  providers: [CepService, CepDTO, PrismaService],
  imports: [HttpModule, CacheModule.register({ isGlobal: true })],
})
export class CepModule {}
