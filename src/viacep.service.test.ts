import { Test, TestingModule } from '@nestjs/testing';
import { ViaCepService } from './viacep.service';

describe('ViaCepService', () => {
  let service: ViaCepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViaCepService],
    }).compile();

    service = module.get<ViaCepService>(ViaCepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('consultarCEP', () => {
    it('should return the correct address for a given CEP', async () => {
      const cep = '50721775';
      const address = await service.consultar(cep);
      expect(address).toEqual({
        "bairro": "Cordeiro",
        "cep": "50721-775",
        "complemento": "lado par",
        "ddd": "81",
        "gia": "",
        "ibge": "2611606",
        "localidade": "Recife",
        "logradouro": "Rua Antônio Valdevino Costa",
        "siafi": "2531",
        "uf": "PE",
      });
    });
  });
  describe('consultarCEP - error case', () => {
    it('should return an error if the API returns an error', async () => {
      const errorMessage = 'Não foi possível realizar a consulta de endereço';
      const cep = '00000000';
      try {
        await service.consultar(cep);
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage));
      }
    });
  });
});
