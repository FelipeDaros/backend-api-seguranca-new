import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateItemDto } from './DTO/CreateItenDTO';

@Injectable()
export class ItensService {
  constructor(private prisma: PrismaService) {}

  public async findAll(){
    return this.prisma.itens.findMany();
  }

  public async createIten({name}: CreateItemDto){
    const itenExists = await this.prisma.itens.findMany({
      where: {
        name
      }
    })

    if(itenExists.length){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: "Item já cadastrado!"
      }, HttpStatus.AMBIGUOUS);
    }

    const iten = await this.prisma.itens.create({
      data: {
        name: name.toLocaleLowerCase()
      }
    });

    return iten;
  }

  public async updateIten(id: string, {name}: CreateItemDto){
    const itenExits = await this.prisma.itens.findUnique({
      where: {
        id
      }
    });

    const itenAltered = await this.prisma.itens.update({
      where: {
        id
      },
      data: {
        name
      }
    })

    return itenAltered;
  }

}
