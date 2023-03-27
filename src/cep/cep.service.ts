import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import config from 'src/globals/enviroments';
import { ApiCep } from 'src/interfaces/apiexternal/cep.agreement';
import { GetCepDTO, ResponseCepAPIDTO } from './dto/cep.dto';

@Injectable()
export class CepService implements ApiCep {
  constructor(private readonly httpService: HttpService) {}

  private makeURLRequest(cep: string): string {
    const url = config().api.via_cep;
    return url.replace('{PARAM_CEP}', cep);
  }

  async getCep(cep: GetCepDTO): Promise<ResponseCepAPIDTO> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<ResponseCepAPIDTO>(this.makeURLRequest(cep.cep))
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw new Error('erro na api do viacep');
          }),
        ),
    );
    return data;
  }
  getCepMock(cep: GetCepDTO): Promise<ResponseCepAPIDTO> {
    return new Promise<ResponseCepAPIDTO>((resolve) => {
      console.log(cep);
      resolve({
        cep: '53250-040',
        logradouro: 'Avenida Coronel João Melo Moraes',
        complemento: 'até 1960/1961',
        bairro: 'Fragoso',
        localidade: 'Olinda',
        uf: 'PE',
        ibge: '2609600',
        gia: '',
        ddd: '81',
        siafi: '2491',
      });
    });
  }
}
