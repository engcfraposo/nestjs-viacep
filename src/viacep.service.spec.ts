import { Test, TestingModule } from '@nestjs/testing';
import { ViaCepService } from './viacep.service';
import axios from 'axios';

jest.mock('axios');

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
    it('should return the address data', async () => {
      const response = {
        data: {
          cep: '00000000',
          logradouro: 'Rua Teste',
          bairro: 'Bairro Teste',
          localidade: 'Cidade Teste',
          uf: 'UF',
        },
      };

      (axios.get as jest.Mock).mockResolvedValue(response);

      const cep = '00000000';
      const result = await service.consultar(cep);

      expect(result).toEqual(response.data);
    });
  });
  describe('consultar - error case', () => {
    it('should return an error if the API returns an error', async () => {
      const errorMessage = 'Não foi possível realizar a consulta de endereço';
      (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const cep = '00000000';
      try {
        await service.consultar(cep);
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage));
      }
    });
  });
});
