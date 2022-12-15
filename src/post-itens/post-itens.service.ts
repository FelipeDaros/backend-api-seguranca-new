import { Injectable } from '@nestjs/common';
import { PostItens } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePostItensDTO } from './DTO/CreatePostItens.dto';

@Injectable()
export class PostItensService {
  constructor(private prismaService: PrismaService){}

  public async createItensPostService({itens_id, post_id}:CreatePostItensDTO):Promise<PostItens>{
    const itenExits = await this.prismaService.postItens.create({
      data: {
        itens_id,
        post_id
      }
    });

    return itenExits;
  }
}
