import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostItensController } from './post-itens.controller';
import { PostItensService } from './post-itens.service';

@Module({
  controllers: [PostItensController],
  providers: [PostItensService, PrismaService]
})
export class PostItensModule {}
