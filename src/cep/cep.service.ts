import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/database/prisma.service';
import config from 'src/globals/enviroments';
import { ApiCep } from 'src/interfaces/apiexternal/cep.agreement';
import { GetCepDTO, ResponseCepAPIDTO } from './dto/cep.dto';
import { CepDTO } from './dto/cep.factory';

const cache: any = {};

@Injectable()
export class CepService implements ApiCep {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly dto: CepDTO,
  ) {}

  private makeURLRequest(cep: string): string {
    const url = config().api.via_cep;
    return url.replace('{PARAM_CEP}', cep);
  }

  async getCepDatabase(cep: string): Promise<ResponseCepAPIDTO> {
    console.log('CEP - DATABASE');
    const cepDB = await this.prisma.cep.findFirst({ where: { cep: cep } });
    if (cepDB) {
      return this.dto.toTextCepDTO(cepDB.data);
    }
    return null;
  }

  async saveCepDatabase(cep: string, data: ResponseCepAPIDTO): Promise<void> {
    await this.prisma.cep.create({
      data: { cep: cep, data: this.dto.toCepTextDTO(data) },
    });
  }

  async getCepViacep(cep: string): Promise<ResponseCepAPIDTO> {
    console.log('CEP - API_VIACEP');
    const { data } = await firstValueFrom(
      this.httpService.get<ResponseCepAPIDTO>(this.makeURLRequest(cep)).pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw new Error('erro na api do viacep');
        }),
      ),
    );
    await this.saveCepDatabase(cep, data);
    await this.saveCepCache(cep, data);
    return data;
  }

  async getCepCache(cep: string): Promise<ResponseCepAPIDTO> {
    console.log('CEP - CACHE');
    const cepCache = await this.cacheManager.get(cep);
    console.log(cepCache);
    if (cepCache) {
      this.dto.toTextCepDTO(cepCache as string);
    }
    return null;
  }

  async saveCepCache(cep: string, data: ResponseCepAPIDTO): Promise<void> {
    await this.cacheManager.set(
      new String(cep).toString(),
      this.dto.toCepTextDTO(data),
      0,
    );
  }

  async getCep(cep: GetCepDTO): Promise<ResponseCepAPIDTO> {
    // 1 - pegar cep no no cache
    const cepCache = await this.getCepCache(cep.cep);
    if (cepCache) return cepCache;
    console.log(cepCache);

    //2 - pegar cep no banco de dados local e salvar no cache
    const cepDB = await this.getCepDatabase(cep.cep);
    if (cepDB) return cepDB;

    // 3 - pegar na api da viacep e salvar no banco de dados local e no cache
    return this.getCepViacep(cep.cep);
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
