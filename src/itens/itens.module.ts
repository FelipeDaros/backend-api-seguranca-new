import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItensController } from './itens.controller';
import { ItensService } from './itens.service';

@Module({
  controllers: [ItensController],
  providers: [ItensService, PrismaService]
})
export class ItensModule {}
