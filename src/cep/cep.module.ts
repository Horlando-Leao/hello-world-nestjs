import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';
import { CepDTO } from './dto/cep.factory';

@Module({
  controllers: [CepController],
  providers: [CepService, CepDTO, PrismaService],
  imports: [HttpModule],
})
export class CepModule {}
