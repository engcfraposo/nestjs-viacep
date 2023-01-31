# Módulo de consulta de endereço via CEP

Este módulo permite realizar consultas de endereço através do CEP, utilizando a API do viaCep.

## Instalação

Para instalar este módulo, basta executar o seguinte comando:

```ssh
npm install nestjs-viacep
```

## Uso

Para usar o ViaCepService precisamos importar o seguinte modulo


```ts
import { ViaCepService } from 'nest-via-cep';

```

importe o decorator Injectable do @nestjs/common:


```ts
import { Injectable } from '@nestjs/common';

```

e use o  @Injectable() decorator no seu controller:


```ts
@Injectable()
export class MyController {
  constructor(private readonly viaCepService: ViaCepService) {}

  async consultar(cep: string) {
    return this.viaCepService.consultar(cep);
  }
}


```

você pode testaer o código importando da seguinte forma:



```ts
@Injectable()
const cep = await this.consultar('50721000');
console.log(cep);

```

# Testes

Para executar os testes deste módulo, basta executar o seguinte comando:

```ssh
npm run test
```

# Licença

Este módulo está disponível sob a licença MIT. Veja o arquivo LICENSE para mais informações.

# Contribuição

Sinta-se livre para contribuir com melhorias no código e na documentação. Para isso, basta abrir uma issue ou fazer um pull request.