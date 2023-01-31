import { Module } from '@nestjs/common';
import { ViaCepService } from './viacep.service';

@Module({
  exports: [ViaCepService],
  providers: [ViaCepService],
})
export class ViaCepModule {}
