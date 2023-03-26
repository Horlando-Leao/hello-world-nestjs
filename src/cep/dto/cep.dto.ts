import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export abstract class GetCepDTO {
  @Length(8, 8)
  @IsNotEmpty()
  @IsNumber()
  cep: number;
}

export abstract class ResponseCepDTO {
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
