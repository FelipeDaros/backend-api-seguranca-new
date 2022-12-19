import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDTO } from './DTO/CreatePost.dto';

@Injectable()
export class PostService {
  constructor(
    private prismaService: PrismaService
  ){}

  public async create({name, company_id, itens_id}:CreatePostDTO): Promise<Post>{
    const postExits = await this.prismaService.post.findUnique({
      where: {
        name
      }
    });

    if(postExits){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "Já existe um posto com esse nome!"
      }, HttpStatus.NOT_FOUND);
    }

    const post = await this.prismaService.post.create({
      data: {
        name,
        company_id
      }
    });

    Array.from({length: itens_id.length}).map(async(data, index) => {
      await this.prismaService.postItens.create({
        data: {
          itens_id: itens_id[index],
          post_id: post.id
        }
      })
    });
    
    return post;
  }

  public async findAll(): Promise<Post[]>{
    return this.prismaService.post.findMany();
  }

  public async findItensPost(id: string){
    const response = await this.prismaService.post.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        company: true,
        PostItens: {
          select: {
            itens: true
          }
        }
      }
    });

    return response;
  }
}
