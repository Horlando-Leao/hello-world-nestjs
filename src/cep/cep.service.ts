import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/database/prisma.service';
import config from 'src/globals/enviroments';
import { ApiCep } from 'src/interfaces/apiexternal/cep.agreement';
import { GetCepDTO, ResponseCepAPIDTO } from './dto/cep.dto';
import { CepDTO } from './dto/cep.factory';

@Injectable()
export class CepService implements ApiCep {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
    private readonly dto: CepDTO,
  ) {}

  private makeURLRequest(cep: string): string {
    const url = config().api.via_cep;
    return url.replace('{PARAM_CEP}', cep);
  }

  async getCep(cep: GetCepDTO): Promise<ResponseCepAPIDTO> {
    const cepDB = await this.prisma.cep.findFirst({ where: { cep: cep.cep } });
    if (cepDB) {
      console.log('BUSCA NO BANCO');
      return this.dto.toTextCepDTO(cepDB.data);
    }

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
    console.log('BUSCA NA API');
    await this.prisma.cep.create({
      data: { cep: cep.cep, data: this.dto.toCepTextDTO(data) },
    });
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
