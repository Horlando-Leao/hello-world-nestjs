import { Injectable } from '@nestjs/common';
import { ResponseCepAPIDTO, ResponseCepDTO } from './cep.dto';

@Injectable()
export class CepDTO {
  toDTO(cep: ResponseCepAPIDTO): ResponseCepDTO {
    return {
      fullEndereco: `${cep.logradouro}, ${cep.bairro} - ${cep.localidade}/${cep.uf}`,
    };
  }
}
