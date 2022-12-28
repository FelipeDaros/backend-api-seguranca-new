import { Module } from '@nestjs/common';
import { PanicService } from './panic.service';
import { PanicController } from './panic.controller';

@Module({
  providers: [PanicService],
  controllers: [PanicController]
})
export class PanicModule {}
