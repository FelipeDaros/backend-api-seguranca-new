import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Round } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateRoundDto } from './dto/CreateRound.dto';

@Injectable()
export class RoundService {
  constructor(
    private readonly prismaService: PrismaService
  ){}

    public async create({user_id, post_id, latitude, longitude, name}: CreateRoundDto){
    const pointExits = await this.prismaService.points.findUnique({
      where: {
        name
      }
    });

    if(!pointExits){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "Ponto não cadastrado!"
      }, HttpStatus.NOT_FOUND)
    }

    const latitudeMais = Number(pointExits.latitude)*1.0001;
    const latitudeMenos = Number(pointExits.latitude)*0.9999;

    const longitudeMais = Number(pointExits.longitude)*1.0001;
    const longitudeMenos = Number(pointExits.longitude)*0.9999;

    if((longitude <= longitudeMais && longitude >= longitudeMenos) && (latitude <= latitudeMais && latitude >= latitudeMenos) && (pointExits.name === name)){
      return await this.prismaService.round.create({
        data: {
          point_id: pointExits.id,
          user_id,
          post_id,
          name
        }
      });
    }else{
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Você não está próximo ao ponto cadastrado!'
      }, HttpStatus.BAD_REQUEST);
    }
  }

  public async findAll(): Promise<Round[]>{
    return await this.prismaService.round.findMany();
  }

  public async findRoundsUser(id: string):Promise<Round[]>{
    const findRoundsUser = await this.prismaService.round.findMany({
      where: {
        user_id: id
      },
      include: {
        user: true
      }
    });

    return findRoundsUser;
  }
}
