import { Controller, Get, Param } from '@nestjs/common';
import { GetCepDTO, ResponseCepDTO } from './dto/cep.dto';
import { CepService } from './cep.service';
import { CepDTO } from './dto/cep.factory';

@Controller('api/v1/cep')
export class CepController {
  constructor(private readonly cepService: CepService, private dto: CepDTO) {}

  @Get(':cep')
  async find(@Param() cep: GetCepDTO): Promise<ResponseCepDTO> {
    return this.dto.toDTO(await this.cepService.getCep(cep));
  }
}
