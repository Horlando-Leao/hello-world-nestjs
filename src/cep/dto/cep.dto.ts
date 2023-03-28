import { ApiProperty } from '@nestjs/swagger';
import { IsPostalCode } from 'class-validator';
import { LocaleSystem } from 'src/globals/system';

export abstract class GetCepDTO {
  @ApiProperty()
  @IsPostalCode(LocaleSystem.POSTAL_CODE_FORMAT)
  cep: string;
}

export abstract class ResponseCepAPIDTO {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export abstract class ResponseCepDTO {
  @ApiProperty()
  fullEndereco: string;
}
