import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ViaCepService {
  async consultar(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        throw new Error('Não foi possível realizar a consulta de endereço');
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Não foi possível realizar a consulta de endereço');
    }
  }
}
