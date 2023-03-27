import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';
import { CepDTO } from './dto/cep.factory';

@Module({
  controllers: [CepController],
  providers: [CepService, CepDTO],
  imports: [HttpModule],
})
export class CepModule {}
