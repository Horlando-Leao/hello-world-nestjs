import { Injectable } from '@nestjs/common';
import { ResponseCepAPIDTO, ResponseCepDTO } from './cep.dto';

@Injectable()
export class CepDTO {
  toDTO(cep: ResponseCepAPIDTO): ResponseCepDTO {
    return {
      fullEndereco: `${cep.logradouro}, ${cep.bairro} - ${cep.localidade}/${cep.uf}`,
    };
  }

  toCepTextDTO(cep: ResponseCepAPIDTO): string {
    return JSON.stringify(cep);
  }

  toTextCepDTO(cep: string): ResponseCepAPIDTO {
    return JSON.parse(cep);
  }
}
