import { Injectable } from '@nestjs/common';
import { ApiCep } from 'src/interfaces/apiexternal/cep.agreement';
import { GetCepDTO, ResponseCepDTO } from './dto/cep.dto';

@Injectable()
export class CepService implements ApiCep {
  getCep(cep: GetCepDTO): Promise<ResponseCepDTO> {
    return new Promise((resolve, reject) => {
      resolve(() => {
        return {
          bairro: 'bairro',
          cep: 'cep',
          complemento: 'complemento',
          ddd: 'ddd',
          gia: 'gia',
          ibge: 'ibge',
          localidade: 'localidade',
          logradouro: 'logradouro',
          siafi: 'siafi',
          uf: 'uf',
        };
      });
    });
  }
}
