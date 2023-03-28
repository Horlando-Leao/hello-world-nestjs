import { Controller, Get, Param } from '@nestjs/common';
import { GetCepDTO, ResponseCepDTO } from './dto/cep.dto';
import { CepService } from './cep.service';
import { CepDTO } from './dto/cep.factory';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('cep')
@Controller('api/v1/cep')
export class CepController {
  constructor(private readonly cepService: CepService, private dto: CepDTO) {}

  @Get(':cep')
  @ApiOperation({ summary: 'Pegar cep por email ou database ou cache' })
  async find(@Param() cep: GetCepDTO): Promise<ResponseCepDTO> {
    return this.dto.toDTO(await this.cepService.getCep(cep));
  }
}
