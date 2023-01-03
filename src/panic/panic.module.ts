import { Module } from '@nestjs/common';
import { PanicService } from './panic.service';
import { PanicController } from './panic.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PanicService, PrismaService],
  controllers: [PanicController],
})
export class PanicModule {}
