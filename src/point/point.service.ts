import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Points } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePointDto } from './dto/CratePoint.dto';

@Injectable()
export class PointService {
  constructor(private readonly prismaService: PrismaService){}

  public async create({name, longitude, latitude, company_id}:CreatePointDto){
    const pointExists = await this.prismaService.points.findUnique({
      where: {
        name
      }
    });

    if(pointExists){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: `Já existe um ponto com o nome ${name}`
      }, HttpStatus.AMBIGUOUS);
    }

    const point =  await this.prismaService.points.create({
      data: {
        name: String(name).toUpperCase(),
        company_id,
        latitude: Number(latitude),
        longitude: Number(longitude)
      }
    });

    return point;
  }

  public async findAllPointsCompany(company_id: string): Promise<Points[]>{
    const points = await this.prismaService.points.findMany({
      where: {
        company_id
      },
    });

    if(!points) throw new NotFoundException("Não foi localizado nenhum point nessa empresa!");

    return points;
  }
}
