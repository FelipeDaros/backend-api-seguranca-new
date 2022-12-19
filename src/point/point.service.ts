import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        name,
        company_id,
        latitude,
        longitude
      }
    });

    return point;
  }
}
