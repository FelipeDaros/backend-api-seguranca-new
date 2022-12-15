import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaService } from 'src/prisma.service';
import { ItensService } from 'src/itens/itens.service';

@Module({
  providers: [PostService, PrismaService],
  controllers: [PostController]
})
export class PostModule {}
